import { Divider } from "@/components/common/divider";
import { ScreenLink } from "@/components/common/screeLink";

export function Settings() {
  return (
    <div className="py-4 space-y-10">
      <div className="space-y-10 px-default">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-muted-foreground text-xl">Account Settings</h2>
          <div className="flex flex-col gap-2">
            <ScreenLink link="editProfile" title="Edit Profile" />
            <ScreenLink link="integration" title="Channel Integration" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 px-default">
        <h2 className="text-muted-foreground text-xl">More</h2>
        <div className="flex flex-col gap-2">
          <ScreenLink link="aboutUs" title="About Us" />
          <ScreenLink link="privacyPolicy" title="Privacy Policy" />
          <ScreenLink link="termsConditions" title="Terms and Conditions" />
        </div>
      </div>
      <div className="w-full p-6"></div>
    </div>
  );
}
