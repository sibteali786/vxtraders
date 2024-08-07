import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";
import { ShuffleIcon, PieChartIcon, TrophyIcon, SettingsIcon, CircleHelpIcon } from "./Icons/Icons";
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

// responsible for icon size in menu
const iconClasses = cva(["h-5", "w-5"]);

export function HorizontalMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background w-full flex justify-center h-[70px]">
      <div className="flex justify-around max-w-[600px] border-t border-border w-full">
        <NavLink
          to="/select-asset"
          className={({ isActive }) => navLinkClasses({ active: isActive })}
        >
          <ShuffleIcon className={iconClasses} />
          Trade
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          <PieChartIcon className={iconClasses} />
          Portfolio
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return navLinkClasses({ active: isActive });
          }}
        >
          <TrophyIcon />
          Leaderboard
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          <SettingsIcon className={iconClasses} />
          Settings
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          <CircleHelpIcon className={iconClasses} />
          Help
        </NavLink>
      </div>
    </nav>
  );
}
