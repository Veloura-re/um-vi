import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function ValueCard({ icon: Icon, title, description, className }: ValueCardProps) {
    return (
        <Card className={cn("text-center h-full bg-white/40 backdrop-blur-xl border-white/50 hover:border-primary/20 hover:shadow-2xl group relative overflow-hidden transition-all duration-700 rounded-[2.5rem] shadow-xl", className)}>
            {/* Animated Glow Border Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <CardHeader className="pt-10 relative z-10">
                <div className="mx-auto p-5 rounded-3xl bg-white border border-slate-100 group-hover:border-primary/20 group-hover:bg-primary transition-all duration-500 mb-8 w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-primary/30 group-hover:text-white">
                    <Icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="mb-4 text-2xl font-black text-slate-900 group-hover:text-primary transition-colors font-heading tracking-tighter uppercase leading-none">{title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 pb-12 px-10">
                <p className="text-slate-600 leading-relaxed font-light text-lg italic">&quot;{description}&quot;</p>
            </CardContent>
        </Card>
    );
}
