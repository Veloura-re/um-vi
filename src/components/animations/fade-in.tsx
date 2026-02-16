"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    staggerChildren?: number;
}

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    distance = 40,
    duration = 0.8,
    staggerChildren,
    className,
    ...props
}: FadeInProps) {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }} // Optimized to once: true to prevent layout shift on scroll
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
                staggerChildren: staggerChildren,
            }}
            className={cn("will-change-transform", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({ children, stagger = 0.1, className, ...props }: { children: React.ReactNode; stagger?: number } & HTMLMotionProps<"div">) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: stagger,
                    },
                },
            }}
            className={cn("will-change-transform", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
