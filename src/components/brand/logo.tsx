"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    size?: number;
    showText?: boolean;
}

export function Logo({ className, size = 40, showText = false }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
            <div
                className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{ width: size, height: size }}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-2xl"
                >
                    <defs>
                        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1B365D" /> {/* Navy Blue */}
                            <stop offset="50%" stopColor="#10B981" /> {/* Emerald Green */}
                            <stop offset="100%" stopColor="#F59E0B" /> {/* Gold */}
                        </linearGradient>

                        <radialGradient id="eye-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                        </radialGradient>

                        <filter id="glass-effect" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                        </filter>
                    </defs>

                    {/* Shield/U-Shape (Ummah) */}
                    <path
                        d="M20 30V65C20 81.5685 33.4315 95 50 95C66.5685 95 80 81.5685 80 65V30"
                        stroke="url(#logo-gradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        className="opacity-90"
                    />

                    {/* Visionary Eye / Star */}
                    <path
                        d="M35 50C35 50 42 40 50 40C58 40 65 50 65 50C65 50 58 60 50 60C42 60 35 50 35 50Z"
                        fill="white"
                        className="drop-shadow-sm"
                    />
                    <circle cx="50" cy="50" r="6" fill="#1B365D" />

                    {/* The Spark */}
                    <circle cx="50" cy="50" r="10" fill="url(#eye-glow)" className="animate-pulse" />

                    {/* Top Bars (Growth/Intelligence) */}
                    <rect x="20" y="5" width="25" height="4" rx="2" fill="#10B981" className="opacity-60" />
                    <rect x="55" y="5" width="25" height="4" rx="2" fill="#F59E0B" className="opacity-60" />
                </svg>
            </div>

            {showText && (
                <div className="flex flex-col leading-none">
                    <span className="text-xl font-heading font-black text-primary tracking-tighter uppercase">
                        UMMAH
                    </span>
                    <span className="text-sm font-mono font-bold text-accent tracking-[0.3em] uppercase">
                        VISION
                    </span>
                </div>
            )}
        </div>
    );
}
