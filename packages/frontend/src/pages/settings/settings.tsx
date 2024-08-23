import { Divider } from "@/components/common/divider";
import { MainHeading } from "@/components/common/mainHeading";
import { ScreenLink } from "@/components/common/screeLink";

export function Settings() {
  return (
    <div className=" space-y-10">
      <div className="space-y-10 px-default">
        <MainHeading title="Settings" />
        <div className="flex flex-col gap-4">
          <h2 className="text-muted-foreground text-base mobile-small:text-lg mobile-medium:text-xl">
            Account Settings
          </h2>
          <div className="flex flex-col gap-2">
            <ScreenLink link="edit-profile" title="Edit Profile" />
            <ScreenLink link="integration" title="Channel Integration" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 px-default">
        <h2 className="text-muted-foreground text-base mobile-small:text-lg mobile-medium:text-xl">
          More
        </h2>
        <div className="flex flex-col gap-2">
          <ScreenLink link="aboutUs" title="About Us" />
          <ScreenLink link="privacy-policy" title="Privacy Policy" />
          <ScreenLink link="termsConditions" title="Terms and Conditions" />
        </div>
      </div>
      <div className="w-full p-6"></div>
    </div>
  );
}
