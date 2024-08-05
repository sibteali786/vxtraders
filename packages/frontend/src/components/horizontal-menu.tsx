import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";
import { ShuffleIcon, PieChartIcon, TrophyIcon, SettingsIcon, CircleHelpIcon } from "./Icons/Icons";
const navLinkClasses = cva(
  "flex flex-col items-center justify-center gap-1 text-xs font-medium sm:text-sm",
  {
    variants: {
      active: {
        true: "text-special",
        false: "text-muted-foreground hover:text-muted-foreground/80",
      },
      mainNav: {
        true: "relative -top-[30px] bg-white p-6 rounded-full",
      },
    },
    defaultVariants: {
      active: false,
      mainNav: false,
    },
  },
);

// responsible for icon size in menu
const iconClasses = cva(["h-7", "w-7"]);

export function HorizontalMenu() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="flex justify-around p-2">
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
            return navLinkClasses({ active: isActive, mainNav: true });
          }}
        >
          <TrophyIcon className="h-8 w-8" />
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
