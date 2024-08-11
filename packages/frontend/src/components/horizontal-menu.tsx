import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";
import { MdOutlineSwapHorizontalCircle, MdSwapHorizontalCircle } from "react-icons/md"; // BoxIcons
import { MdPieChartOutline, MdPieChart } from "react-icons/md"; // Material Design icons
import { AiOutlineTrophy, AiFillTrophy, AiFillQuestionCircle } from "react-icons/ai"; // Ant Design icons
import { FiHelpCircle } from "react-icons/fi"; // Feather icons
import { IoSettings, IoSettingsOutline } from "react-icons/io5";

const navLinkClasses = cva(
  "flex flex-col items-center justify-center gap-[3px] text-xs font-medium",
  {
    variants: {
      active: {
        true: "text-special",
        false: "text-muted-foreground hover:text-muted-foreground/80",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export function HorizontalMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-1000 bg-background w-full flex justify-center h-[70px]">
      <div
        className="flex justify-around max-w-global border-t border-border w-full"
        style={{
          maxWidth: "var(--max-width)",
          border: "1px solid hsl(var(--border))",
          borderRadius: "8px",
          borderTop: "none",
        }}
      >
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

        <NavLink to="/portfolio" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          {({ isActive }) => (
            <>
              {isActive ? <MdPieChart size={24} /> : <MdPieChartOutline size={24} />}
              Portfolio
            </>
          )}
        </NavLink>

        <NavLink to="/" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          {({ isActive }) => (
            <>
              {isActive ? <AiFillTrophy size={24} /> : <AiOutlineTrophy size={24} />}
              Leaderboard
            </>
          )}
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          {({ isActive }) => (
            <>
              {isActive ? <IoSettings size={24} /> : <IoSettingsOutline size={24} />}
              Settings
            </>
          )}
        </NavLink>

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
