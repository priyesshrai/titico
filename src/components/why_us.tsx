"use client";
import { useState } from "react";
import { data } from "../constant/why_us";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { AnimatePresence, motion } from "motion/react";


export default function WhyUs() {
    const [hoveredIdx, setHoverIdx] = useState<null | number>(null);
    return (
        <Section className="bg-white">
            <Wrapper>
                <div className="flex items-start justify-between gap-8 flex-wrap">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-px bg-gold" />
                            <span className="font-mono text-[10px] font-bold tracking-[.16em] uppercase text-gold">
                                Why choose us
                            </span>
                        </div>
                        <h2 className="font-play text-3xl lg:text-4xl font-medium text-dark leading-snug">
                            What makes us the<br /> <em className="italic text-gold">right partner</em>
                        </h2>
                    </div>
                    <p className="text-sub text-sm leading-relaxed max-w-sm">
                        Every claim below is backed by a process, a certification, or a
                        production number — not just a promise.
                    </p>
                </div>

                <div className="flex flex-col">
                    {data.map((item, idx) => {
                        const Icon = item.icon;
                        const isLast = idx === data.length - 1;
                        return (
                            <div
                                key={idx}
                                className={`relative group grid items-center gap-6 py-6 px-5 ${!isLast ? "border-b border-gold/12" : ""}
                                 border-t border-gold/12 first:border-t`
                                }
                                style={{ gridTemplateColumns: "48px 1fr auto" }}
                                onMouseEnter={() => setHoverIdx(idx)}
                                onMouseLeave={() => setHoverIdx(null)}
                            >
                                <div className="relative z-10 w-12 h-12 rounded-xl border border-gold/25 bg-gold/7 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-gold group-hover:border-gold">
                                    <Icon
                                        size={20}
                                        className="text-gold transition-colors duration-200 group-hover:text-white"
                                        strokeWidth={1.75}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col gap-1">
                                    <span className="font-play text-dark text-[1.05rem] font-medium">
                                        {item.label}
                                    </span>
                                    <p className="text-sub text-sm leading-relaxed max-w-lg">
                                        {item.content}
                                    </p>
                                </div>

                                <span className="relative z-10 font-mono text-xs font-bold text-gold/60 tracking-wider hidden sm:block">
                                    {item.num}
                                </span>

                                <AnimatePresence>
                                    {hoveredIdx === idx && (
                                        <motion.div
                                            layoutId="hover-bg"
                                            className="absolute inset-0 bg-gold/10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                layout: {
                                                    duration: 0.35,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                                opacity: {
                                                    duration: 0.5,
                                                },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </Section>
    );
}