import { SettingsLayout } from "../components/settings/SettingsLayout";
import { ProfileForm } from "../components/profile/ProfileForm";
import { ProfileImageUpload } from "../components/profile/ProfileImageUpload";
import { ProfileLinks } from "../components/profile/ProfileLinks";

export default function Profile() {
  return (
    <SettingsLayout>
      <div className="flex flex-col">
        <ProfileForm />
        <ProfileImageUpload />
        <ProfileLinks />
      </div>
    </SettingsLayout>
  );
}
