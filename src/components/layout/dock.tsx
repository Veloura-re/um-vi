"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, Info, BookOpen, GraduationCap, Mail, Camera } from "lucide-react";
import { Logo } from "@/components/brand/logo";

export function Dock() {
    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6">
            <Link href="/" className="mb-2">
                <Logo size={50} />
            </Link>

            <div className="flex flex-col items-center gap-4 rounded-full bg-white/80 px-3 py-6 backdrop-blur-md border border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <DockCloud>
                    <DockIcon href="/" icon={Home} label="Home" />
                    <DockIcon href="/about" icon={Info} label="About" />
                    <DockIcon href="/programs" icon={BookOpen} label="Programs" />
                    <DockIcon href="/campus" icon={Camera} label="Campus" />
                    <DockIcon href="/admissions" icon={GraduationCap} label="Admissions" />
                    <DockIcon href="/contact" icon={Mail} label="Contact" />
                </DockCloud>
            </div>
        </div>
    );
}

function DockCloud({ children }: { children: React.ReactNode }) {
    const mouseY = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseY.set(e.clientY)}
            onMouseLeave={() => mouseY.set(Infinity)}
            className="flex flex-col items-center gap-4 h-full"
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return React.cloneElement(child as React.ReactElement<any>, { mouseY } as any);
                }
                return child;
            })}
        </motion.div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DockIcon({ href, icon: Icon, label, mouseY }: { href: string; icon: React.ElementType; label: string; mouseY?: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseY, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    const sizeSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} className="group relative flex items-center justify-center">
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                className="rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors shadow-sm will-change-[width,height]"
            >
                <Icon className="text-slate-600 w-1/2 h-1/2 group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <span className="absolute left-full ml-4 scale-0 rounded bg-slate-900 px-2 py-1 text-xs text-nowrap text-white group-hover:scale-100 transition-all origin-left shadow-lg">
                {label}
            </span>
        </Link>
    );
}
