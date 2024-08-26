import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";
import { MdOutlineSwapHorizontalCircle, MdSwapHorizontalCircle } from "react-icons/md"; // BoxIcons
import { MdPieChartOutline, MdPieChart } from "react-icons/md"; // Material Design icons
import { AiOutlineTrophy, AiFillTrophy, AiFillQuestionCircle } from "react-icons/ai"; // Ant Design icons
import { FiHelpCircle } from "react-icons/fi"; // Feather icons
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { LogIn } from "lucide-react";

const navLinkClasses = cva(
  "flex flex-col items-center justify-center gap-[3px] text-xs font-medium",
  {
    variants: {
      active: {
        true: "text-white",
        false: "text-muted-foreground hover:text-muted-foreground/80",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export type MenuProps = {
  isUserRegistered: boolean;
};

export function HorizontalMenu({ isUserRegistered }: MenuProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-1000 bg-black w-full flex justify-center h-[70px] max-allowed-width:pb-2">
      <div
        className={`grid ${isUserRegistered ? "grid-cols-5" : "grid-cols-3"}  max-w-global max-allowed-width:border-border w-full max-allowed-width:border-x-[1px] max-allowed-width:border-b-[1px] rounded-b-[8px] border-t-0 items-center `}
      >
        <NavLink to="/" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          {({ isActive }) => (
            <>
              {isActive ? <AiFillTrophy size={24} /> : <AiOutlineTrophy size={24} />}
              Leaderboard
            </>
          )}
        </NavLink>
        {isUserRegistered ? (
          <>
            <NavLink
              to="/select-asset"
              className={({ isActive }) => navLinkClasses({ active: isActive })}
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <MdSwapHorizontalCircle size={24} />
                  ) : (
                    <MdOutlineSwapHorizontalCircle size={24} />
                  )}
                  Trade
                </>
              )}
            </NavLink>

            <NavLink
              to="/portfolio/1"
              className={({ isActive }) => navLinkClasses({ active: isActive })}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <MdPieChart size={24} /> : <MdPieChartOutline size={24} />}
                  Portfolio
                </>
              )}
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) => navLinkClasses({ active: isActive })}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <IoSettings size={24} /> : <IoSettingsOutline size={24} />}
                  Settings
                </>
              )}
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/register"
            className={({ isActive }) => navLinkClasses({ active: isActive })}
          >
            <LogIn /> Join
          </NavLink>
        )}

        <NavLink to="/help" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          {({ isActive }) => (
            <>
              {isActive ? <AiFillQuestionCircle size={24} /> : <FiHelpCircle size={24} />}
              Help
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
