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
    <section className="rounded-[24px] border border-[#E9E7E2] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-200 ease-out hover:border-[#DCE6FF] hover:shadow-[0_16px_40px_rgba(90,140,255,0.08)]">
      <div className="mb-6 flex items-center space-x-2 border-b border-gray-100 pb-4 text-lg font-semibold text-gray-700">
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
                className="border-b border-gray-50 transition-colors duration-200 hover:bg-[#F8FAFF]"
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
                  <button className="font-medium text-gray-500 transition-colors duration-200 hover:text-[#3E6FE6]">
                    Log out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
