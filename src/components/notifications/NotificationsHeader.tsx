export function NotificationsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      <button className="text-sm font-medium text-green-500 hover:text-green-600">
        Mark all as read
      </button>
    </div>
  );
}