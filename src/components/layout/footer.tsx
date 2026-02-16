import Link from "next/link";
import { Container } from "@/components/layout/container";
import { } from "lucide-react";
import { Logo } from "@/components/brand/logo";

export function Footer() {
    return (
        <footer className="py-24 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Logo showText size={60} className="mb-8" />
                        <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-light">
                            Redefining education for the next generation of global leaders, combining cutting-edge technology with timeless moral values.
                        </p>
                    </div>

                    <div className="flex justify-center gap-10 text-sm font-bold tracking-widest uppercase font-mono order-1 md:order-2">
                        <Link href="/privacy" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">Privacy</Link>
                        <Link href="/terms" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">Terms</Link>
                        <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors hover:scale-110">Contact</Link>
                    </div>

                    <div className="text-slate-400 text-[10px] font-mono font-bold tracking-widest text-center md:text-right order-3">
                        &copy; {new Date().getFullYear()} UMMAH VISION FOUNDATION.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
