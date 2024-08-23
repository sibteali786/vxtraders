import { cva } from "class-variance-authority";

const cardStyles = cva(
  "flex items-center justify-between py-3 px-2 mobile-medium:px-3 shadow-sm rounded-lg border border-border",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        light: "bg-white text-black",
      },
      size: {
        small: "py-2 px-2",
        medium: "py-3 px-3",
        large: "py-4 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

type BaseCardProps = {
  variant?: "default" | "light";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
};

export function BaseCard({ children, variant, size, className, ...props }: BaseCardProps) {
  return (
    <div className={cardStyles({ variant, size, className })} {...props}>
      {children}
    </div>
  );
}
