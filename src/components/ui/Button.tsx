import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  showArrow = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] font-semibold font-body rounded-md transition-all duration-300 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2";
  const variants = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-dark hover:-translate-y-0.5",
    secondary:
      "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white hover:-translate-y-0.5",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {showArrow && <ArrowUpRight size={18} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowUpRight size={18} />}
    </button>
  );
}
