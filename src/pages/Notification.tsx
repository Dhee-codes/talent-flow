// NotificationsPage.tsx
import React, { useState } from 'react';
import { Bell, CheckCircle, MessageCircle, FileText, AlertCircle, Shield } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  isUnread?: boolean;
  type: 'grade' | 'message' | 'upload' | 'error' | 'security';
}

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Working with frames 101",
      message: "Your recent submission has been graded by Aris Thorne. You achieved a score of 94/100. Excellent work on the integration section",
      time: "12 mins ago",
      isUnread: true,
      type: "grade"
    },
    {
      id: 2,
      title: "You received a message from Aris Thorne",
      message: 'Hey! Are we still meeting today at 5 PM for the next class? I\'m ready when you are.',
      time: "12 mins ago",
      isUnread: true,
      type: "message"
    },
    {
      id: 3,
      title: "New course materials uploaded",
      message: "Victor, a new course materials has just been uploaded",
      time: "52 mins ago",
      isUnread: false,
      type: "upload"
    },
    {
      id: 4,
      title: "Submission failed. Try again.",
      message: "Victor, your submission failed, retry submission again.",
      time: "Just now",
      isUnread: true,
      type: "error"
    },
    {
      id: 5,
      title: "Login from new device",
      message: "A new login was detected on your account from Chrome on macOS. If this wasn't you, please secure your account immediately.",
      time: "3 days ago",
      isUnread: false,
      type: "security"
    },
  ]);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'grade': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'message': return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case 'upload': return <FileText className="w-5 h-5 text-violet-500" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'security': return <Shield className="w-5 h-5 text-amber-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredNotifications = activeTab === 'unread' 
    ? notifications.filter(n => n.isUnread)
    : notifications;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-semibold text-xl text-gray-800">learnwise</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">My Course</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Assignment</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Learning Progress</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Chat</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a Course"
              className="w-80 bg-gray-100 border border-gray-200 rounded-full px-5 py-2 text-sm focus:outline-none focus:border-blue-400"
            />
            <div className="absolute right-4 top-3 text-gray-400">🔍</div>
          </div>

          <div className="relative cursor-pointer">
            <div className="w-9 h-9 flex items-center justify-center">
              🛒
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-[10px] rounded-full flex items-center justify-center">3</div>
          </div>

          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            A
          </div>
        </div>
      </header>

      {/* Notifications Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Notifications</h1>
          <button
            onClick={markAllAsRead}
            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1"
          >
            Mark all as read
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'unread' ? 'bg-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Unread
            {unreadCount > 0 && (
              <span className="bg-emerald-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`bg-white rounded-2xl p-6 border-l-4 transition-all hover:shadow-md ${
                  notif.isUnread ? 'border-l-emerald-500' : 'border-l-transparent'
                }`}
              >
                <div className="flex gap-4">
                  <div className="mt-1">{getIcon(notif.type)}</div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-900">{notif.title}</h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {notif.time}
                        {notif.isUnread && <span className="text-emerald-500 ml-1.5">●</span>}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mt-1 text-[15px] leading-relaxed">
                      {notif.message}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-gray-500">
              No unread notifications
            </div>
          )}
        </div>

        {/* Earlier This Week Section */}
        {activeTab === 'all' && (
          <div className="mt-12">
            <h2 className="uppercase text-xs tracking-widest text-gray-500 font-medium mb-4">
              EARLIER THIS WEEK
            </h2>
            {/* The security notification is already in the list above */}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;