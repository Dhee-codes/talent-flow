import { SettingsLayout } from "../components/settings/SettingsLayout";
import { ProfileForm } from "../components/profile/ProfileForm";
import { ProfileImageUpload } from "../components/profile/ProfileImageUpload";
import { ProfileLinks } from "../components/profile/ProfileLinks";

const Profile = () => {
  return (
    <SettingsLayout>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <ProfileForm />
          <ProfileLinks />
        </div>
        <div className="w-full xl:w-[320px] shrink-0">
          <ProfileImageUpload />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Profile;
