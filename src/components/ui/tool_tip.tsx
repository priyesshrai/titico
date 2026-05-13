"use client";

import { cn } from "@/src/lib/utils";
import { useState, useRef } from "react";
import AnimatedDiv from "./motion_div";
import Image from "next/image";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
    useSpring,
} from "motion/react";

export interface Data {
    name: string;
    img: string;
    post?: string;
}

interface Props {
    data: Data[];
    className?: string;
}

export default function ToolTip({ data, className }: Props) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 160, damping: 18 };

    const x = useMotionValue(0);
    const animationFrameRef = useRef<number | null>(null);


    const rotate = useSpring(
        useTransform(x, [-80, 80], [-12, 12]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(x, [-80, 80], [-30, 30]),
        springConfig
    );

    const handleMouseMove = (event: any) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
            const halfWidth = event.target.offsetWidth / 2;
            x.set(event.nativeEvent.offsetX - halfWidth);
        });
    };


    return (
        <div className={cn("relative flex items-center", className)}>
            {data.map((items, idx) => (
                <AnimatedDiv
                    key={items.name}
                    idx={idx}
                    className={cn(
                        "relative size-12 rounded-full bg-white p-0.5 cursor-pointer",
                        idx === 0 ? "ml-0" : "-ml-5.5"
                    )}
                >
                    <Image
                        src={items.img}
                        alt={items.name}
                        width={50}
                        height={50}
                        onMouseMove={handleMouseMove}
                        className="w-full h-full object-cover object-top rounded-full"
                        onMouseEnter={() => setHoverIndex(idx)}
                        onMouseLeave={() => setHoverIndex(null)}
                    />


                    <AnimatePresence>
                        {hoverIndex === idx && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.7,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.7,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 14,
                                }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-18 left-1/2 z-50 -translate-x-1/2
                                           flex flex-col items-center gap-1
                                           rounded-lg bg-zinc-800 px-4 py-3 shadow-xl"
                            >
                                <span className="text-base font-pop font-medium text-white whitespace-nowrap">
                                    {items.name}
                                </span>

                                {items.post && (
                                    <span className="text-xs font-pop text-zinc-300 whitespace-nowrap">
                                        {items.post}
                                    </span>
                                )}

                                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
                                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-linear-to-r from-transparent via-sky-500 to-transparent" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </AnimatedDiv>
            ))}
        </div>
    );
}
