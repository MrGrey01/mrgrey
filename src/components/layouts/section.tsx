import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  isFull?: boolean;
  children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, isFull, children, ...rest }, ref) => {
    return (
      <section
        id={id}
        className={cn(
          "relative xbg-background rounded-t-[50px] py-24 pb-32 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
          "bg-linear-to-b from-black to-zinc-950",
          "-mb-8",
          className,
        )}
        ref={ref}
        {...rest}
      >
        <div className={cn("max-w-6xl mx-auto px-4", isFull && "max-w-full")}>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";
