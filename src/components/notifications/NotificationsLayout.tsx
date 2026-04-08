export function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#EEF2F7] p-8">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
}