import { cn } from "@/lib/utils";

interface RoleBadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card({ className, children }: RoleBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-start w-full h-min gap-4 rounded-2xl p-6 pb-8",
        "xbg-zinc-900/40 bg-[#111] overflow-visible",
        "shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Card2({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full h-min p-6 pb-8 rounded-2xl bg-[#111] overflow-visible shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(184,180,180,0.08)]">
      {children}
    </div>
  );
}
