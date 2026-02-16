import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    className,
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
    };

    return (
        <div className={cn("mb-12", alignmentClasses[align], className)}>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary drop-shadow-sm uppercase tracking-wide">
                {title}
            </h2>
            {subtitle && (
                <div className={cn("max-w-2xl", align === "center" ? "mx-auto" : "")}>
                    <p className="text-lg text-slate-600 font-light mt-2">{subtitle}</p>
                    <div className={cn("mt-4 h-1 w-24 bg-accent rounded-full relative overflow-hidden", align === "center" ? "mx-auto" : "")}>
                        <div className="absolute inset-0 bg-white/40 animate-pulse-glow" />
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-accent shadow-[0_0_10px_2px_rgba(245,158,11,0.5)]" />
                    </div>
                </div>
            )}
        </div>
    );
}
