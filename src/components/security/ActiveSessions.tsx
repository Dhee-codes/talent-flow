import { MonitorSmartphone } from "lucide-react";

export function ActiveSessions() {
  const sessions = [
    {
      device: "Chrome - Windows",
      location: "Lagos, Nigeria",
      lastActive: "2 minutes ago",
    },
    {
      device: "Chrome - Windows",
      location: "Lagos, Nigeria",
      lastActive: "2 days ago",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-2 font-semibold text-lg pb-4 border-b border-gray-100 mb-6 text-gray-700">
        <MonitorSmartphone className="w-5 h-5 text-gray-500" />
        <h3>Active Sessions</h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-700 font-bold border-b border-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3">
                Devices
              </th>
              <th scope="col" className="px-4 py-3">
                Location
              </th>
              <th scope="col" className="px-4 py-3">
                Last active
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-4 py-4 flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full conic-gradient-custom relative overflow-hidden shrink-0">
                    {/* Fake Chrome icon-like shape */}
                    <div className="absolute inset-0 bg-red-500 rounded-t-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-400"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-500"></div>
                    <div className="absolute inset-1.5 bg-blue-500 rounded-full border border-white"></div>
                  </div>
                  <span className="font-medium text-gray-600">
                    {session.device}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-500">{session.location}</td>
                <td className="px-4 py-4 text-gray-500">
                  {session.lastActive}
                </td>
                <td className="px-4 py-4 text-gray-500">
                  <button className="text-gray-500 hover:text-gray-800 font-medium">
                    Log out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
