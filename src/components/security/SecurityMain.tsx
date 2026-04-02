import { LoginInformation } from './LoginInformation';
import { TwoFactorAuth } from './TwoFactorAuth';
import { ThemeSettings } from './ThemeSettings';
import { ActiveSessions } from './ActiveSessions';

export function SecurityMain() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Account & Security</h1>
        <p className="text-sm text-gray-500">Manage login, security, and account access</p>
      </div>

      <LoginInformation />
      <TwoFactorAuth />
      <ThemeSettings />
      <ActiveSessions />
    </div>
  );
}
