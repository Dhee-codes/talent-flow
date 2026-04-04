import { Sidebar } from './Sidebar';

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full grow flex flex-col relative bg-[#F6F5F3] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:flex-row lg:items-start">
        <Sidebar />
        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
