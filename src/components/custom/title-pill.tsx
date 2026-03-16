import { cn } from "@/lib/utils";

interface RoleBadgeProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TitleBadge({ label, className, icon }: RoleBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground",
        "bg-zinc-900/40 xbg-[rgba(255,255,255,0.05)] xbackdrop-blur-sm",
        "shadow-[0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
        "transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      {icon ? (
        <span className="mr-1">{icon}</span>
      ) : (
        <span className="flex h-3 w-3 items-center justify-center rounded-full border border-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      )}

      {label}
    </div>
  );
}
