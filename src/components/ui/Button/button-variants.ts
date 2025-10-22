import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan text-white hover:bg-cyan-hover rounded-full px-8 py-2",
        secondary:
          "bg-transparent text-grayish-violet hover:text-very-dark-violet",
      },
      size: {
        default: "px-8 py-2 text-base",
        sm: "px-6 py-1.5 text-sm",
        lg: "px-10 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);
