import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const contactButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-transform transform hover:scale-110 shadow-lg border-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#fcbc30] text-white border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl",
        destructive:
          "bg-red-500 text-white border-red-700 hover:bg-red-700 hover:border-red-500 hover:shadow-xl",
        outline:
          "bg-transparent text-[#fcbc30] border-[#fcbc30] hover:bg-[#fcbc30] hover:text-white hover:shadow-xl",
        secondary:
          "bg-[#ff8800] text-white border-[#fcbc30] hover:bg-[#fcbc30] hover:border-[#ff8800] hover:shadow-xl",
        ghost: "bg-transparent text-[#fcbc30] hover:bg-[#fcbc30]/10 hover:shadow-xl",
        link: "text-[#fcbc30] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 px-6 py-1",
        lg: "h-12 px-10 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ContactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof contactButtonVariants> {
  asChild?: boolean;
  "aria-label"?: string;
}

const ContactButton = React.forwardRef<HTMLButtonElement, ContactButtonProps>(
  ({ className, variant, size, asChild = false, "aria-label": ariaLabel, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(contactButtonVariants({ variant, size, className }))}
        ref={ref}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);
ContactButton.displayName = "ContactButton";

export { ContactButton, contactButtonVariants };