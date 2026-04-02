import { Sidebar } from './Sidebar';

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex-grow flex flex-col relative py-8 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        <Sidebar />
        <main className="flex-1 w-full max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
