'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { data } from "../constant/collections";

export default function Collections() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <Section className="bg-cream">
            <Wrapper>
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-bold tracking-[.16em] uppercase text-gold">Fabric Collections</span>
                        <div className="w-7 h-px bg-gold" />
                    </div>
                    <h2 className="font-play text-3xl lg:text-4xl font-medium text-dark">
                        Our Fabric <em className="italic text-gold">Collections</em>
                    </h2>
                    <p className="text-sub text-sm max-w-sm mt-2 leading-tight">
                        Crafted to meet the needs of global fashion, home textiles, and industrial markets
                    </p>
                </div>

                {/* Accordion */}
                <div className="border border-gold/20 rounded-2xl overflow-hidden bg-white">
                    {data.map((item, idx) => {
                        const isOpen = open === idx;
                        return (
                            <div key={idx} className="border-b border-gold/15 last:border-b-0">
                                {/* Trigger */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : idx)}
                                    className={`w-full flex items-center gap-4 px-6 py-5 transition-colors duration-200 text-left ${isOpen ? "bg-dark" : "bg-white hover:bg-gold/5"}`}
                                >
                                    <span
                                        className="font-mono text-[11px] font-bold text-gold tracking-wider min-w-6">
                                        {item.num}
                                    </span>
                                    <span className={`font-mono text-sm font-bold flex-1 tracking-wide transition-colors ${isOpen ? "text-white" : "text-dark"}`}>
                                        {item.name}
                                    </span>
                                    {!isOpen && (
                                        <span className="font-mono text-[9px] font-bold tracking-[.12em] uppercase text-gold border border-gold/30 bg-gold/8 px-2 py-1 rounded hidden sm:block">
                                            {item.badge}
                                        </span>
                                    )}
                                    {isOpen && (
                                        <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white/40 hidden sm:block">
                                            {item.badge}
                                        </span>
                                    )}
                                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? "bg-gold border-gold rotate-180" : "border-gold/30"}`}>
                                        <ChevronDown size={13} className={isOpen ? "text-white" : "text-gold"} />
                                    </span>
                                </button>

                                {/* Body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } }}
                                            exit={{ height: 0, opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
                                            className="overflow-hidden p-5 lg:p-10 md:p-8"
                                        >
                                            <div className="grid lg:grid-cols-[400px_1fr]">
                                                {/* Image */}
                                                <div className="relative bg-cream-dark min-h-80 lg:min-h-100 overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        fill
                                                        alt={item.name}
                                                        className="object-cover object-center rounded-lg"
                                                    />
                                                    <div className="absolute inset-0 bg-dark/15 rounded-lg" />
                                                </div>
                                                {/* Text */}
                                                <div className="p-8 flex flex-col gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-px bg-gold" />
                                                        <span className="font-mono text-[9px] font-bold tracking-[.14em] uppercase text-gold">{item.badge}</span>
                                                    </div>
                                                    <h3 className="font-play text-dark text-xl font-medium leading-snug">{item.title}</h3>
                                                    <p className="text-sub text-sm leading-relaxed">{item.text}</p>
                                                    <div className="flex gap-6 pt-1">
                                                        {item.stats.map((s, i) => (
                                                            <div key={i}>
                                                                <div className="font-play text-dark text-xl font-medium">{s.n.replace('+', '')}<span className="text-gold">+</span></div>
                                                                <div className="font-mono text-[9px] font-bold tracking-widest uppercase text-sub mt-0.5">{s.l}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Link href="/#" className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase text-dark border border-dark/20 px-4 py-2.5 rounded-md hover:bg-dark hover:text-cream transition-all duration-200 w-fit mt-1">
                                                        <ArrowRight size={11} /> Explore Collection
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
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