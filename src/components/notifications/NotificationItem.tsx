type Props = {
  title: string;
  description: string;
  time: string;
  unread: boolean;
  urgent: boolean;
};

export function NotificationItem({ title, description, time, unread, urgent }: Props) {
  return (
    <div className="bg-white rounded-xl px-6 py-4 flex items-start justify-between shadow-sm">
      <div className="flex-1 pr-6">
        <p className="text-lg font-bold text-gray-900 mb-1">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className={`text-xs font-medium ${urgent ? "text-red-500" : "text-gray-400"}`}>
          {time}
        </span>
        {unread && <span className="w-2 h-2 rounded-full bg-green-500" />}
      </div>
    </div>
  );
}