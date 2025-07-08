import Link from "next/link";

interface Button2Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isVisible?: boolean;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button2 = ({
  children,
  href,
  onClick,
  isVisible = true,
  showArrow = true,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: Button2Props) => {
  const baseStyles =
    "group inline-flex items-center gap-3 rounded-sm transition-all duration-300 font-semibold shadow-xl transform active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-900 to-slate-800 text-white hover:from-blue-800 hover:to-slate-700 hover:shadow-2xl hover:shadow-blue-500/25",
    secondary:
      "bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 hover:shadow-2xl hover:shadow-slate-500/25",
    outline:
      "bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:shadow-blue-500/25",
  };

  const sizes = {
    sm: "px-6 py-1.5 text-sm",
    md: "px-8 py-2 text-base",
    lg: "px-10 py-2.5 text-lg",
  };

  const visibilityStyles = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  const hoverStyles = disabled
    ? "cursor-not-allowed opacity-50"
    : "hover:scale-105";

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${visibilityStyles} ${hoverStyles} transition-all duration-1000 delay-700 ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button2;
