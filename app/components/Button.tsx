import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

interface ButtonProps extends VariantProps<typeof buttonClass> {
  children: React.ReactNode;
  href: string;
}
const buttonClass = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: ["bg-primary-gradient hover:text-shadow hover:shadow-primary "],
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link className={buttonClass({ variant, size })} href={href}>
      {children}
    </Link>
  );
};

export default Button;
