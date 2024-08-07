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

export function HorizontalMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background w-full flex justify-center h-[70px]">
      <div className="flex justify-around max-w-global border-t border-border w-full">
        <NavLink
          to="/select-asset"
          className={({ isActive }) => navLinkClasses({ active: isActive })}
        >
          <ShuffleIcon />
          Trade
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          <PieChartIcon />
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
          <SettingsIcon />
          Settings
        </NavLink>
        <NavLink to="/help" className={({ isActive }) => navLinkClasses({ active: isActive })}>
          <CircleHelpIcon />
          Help
        </NavLink>
      </div>
    </nav>
  );
}
