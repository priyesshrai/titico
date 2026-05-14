"use client";
import { motion, useInView } from "motion/react";
import { useRef } from 'react';
import Image from 'next/image';
import Section from "@/src/components/ui/section";
import Wrapper from "@/src/components/ui/wrapper";
import { pillars, timeline } from "@/src/constant/legacy";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function LegacyPage() {
    return (
        <main>

            {/* ── HERO ── */}
            <Section className="bg-dark overflow-hidden">
                <Wrapper className="lg:py-28 py-20 gap-0">
                    <div className="relative z-10 max-w-3xl">
                        <FadeUp>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Varanasi · Est. 1978
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="font-yeseva text-cream text-5xl lg:text-7xl leading-[1.1] mb-6">
                                A Story Woven <br />
                                <em className="text-gold not-italic">Across Generations</em>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="font-pop text-[#b0a898] text-lg leading-relaxed max-w-xl">
                                Forty-five years ago, a single loom was set in motion in a narrow lane of Varanasi. That motion has never stopped. This is what happened in between.
                            </p>
                        </FadeUp>
                    </div>
                    {/* Decorative large numeral */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 font-yeseva text-[18rem] text-white/3 select-none leading-none hidden lg:block">
                        1978
                    </div>
                </Wrapper>
            </Section>

            {/* ── OPENING STATEMENT ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeUp>
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl" />
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/banner/old.png"
                                        alt="Titico early years — handloom weaving in Varanasi"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm rounded-lg px-4 py-3">
                                    <div className="font-mono text-[9px] text-gold uppercase tracking-widest mb-0.5">Est.</div>
                                    <div className="font-yeseva text-cream text-2xl">1978</div>
                                </div>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-px bg-gold" />
                                    <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                        Our Foundation
                                    </span>
                                </div>
                                <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-6">
                                    Fabric is not made.{" "}
                                    <em className="text-gold not-italic">It is inherited.</em>
                                </h2>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-4">
                                    Our story begins the way most great things in Varanasi do — with a family, a craft, and a patience that the modern world rarely permits. Ram Prasad Gupta did not set out to build a business. He set out to make fabric that was honest.
                                </p>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-6">
                                    Honest to the yarn. Honest to the weave. Honest to the person who would eventually wear it or drape it or sleep beneath it. That commitment — more than any loom or any market — is what has carried Titico through four generations and forty-five years.
                                </p>
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e4ddd4]">
                                    {[
                                        { val: "45+", lbl: "Years of craft" },
                                        { val: "4th", lbl: "Generation" },
                                        { val: "20+", lbl: "Countries" },
                                    ].map((s) => (
                                        <div key={s.lbl}>
                                            <div className="font-yeseva text-2xl text-dark">{s.val}</div>
                                            <div className="font-pop text-[10px] text-[#888] mt-0.5 tracking-wide">{s.lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* ── TIMELINE ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    The Journey
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                Milestones on the <em className="text-gold not-italic">loom</em>
                            </h2>
                        </div>
                    </FadeUp>

                    {/* Central line */}
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d8cfc4] hidden lg:block" />

                        <div className="flex flex-col gap-0">
                            {timeline.map((item, i) => {
                                const isLeft = item.side === "left";
                                return (
                                    <FadeUp key={i} delay={0.05 * i}>
                                        <div className={`relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-0 py-10`}>

                                            {/* Left cell */}
                                            <div className={`lg:pr-12 ${isLeft ? "lg:text-right" : "lg:opacity-0 lg:pointer-events-none"}`}>
                                                {isLeft && (
                                                    <>
                                                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">{item.era}</div>
                                                        <h3 className="font-yeseva text-dark text-2xl mb-2">{item.title}</h3>
                                                        <p className="font-pop font-light text-cont text-sm leading-relaxed">{item.body}</p>
                                                    </>
                                                )}
                                            </div>

                                            {/* Centre dot + year */}
                                            <div className="flex flex-col items-center gap-2 lg:w-24 shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-dark border-4 border-gold flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-gold" />
                                                </div>
                                                <span className="font-yeseva text-sm text-dark">{item.year}</span>
                                            </div>

                                            {/* Right cell */}
                                            <div className={`lg:pl-12 ${!isLeft ? "" : "lg:opacity-0 lg:pointer-events-none"}`}>
                                                {!isLeft && (
                                                    <>
                                                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">{item.era}</div>
                                                        <h3 className="font-yeseva text-dark text-2xl mb-2">{item.title}</h3>
                                                        <p className="font-pop font-light text-cont text-sm leading-relaxed">{item.body}</p>
                                                    </>
                                                )}
                                            </div>

                                        </div>
                                        {i < timeline.length - 1 && <div className="border-b border-[#d8cfc4] lg:hidden" />}
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── THEN VS NOW ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Then & Now
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                The same thread, <em className="text-gold not-italic">two centuries</em>
                            </h2>
                        </div>
                    </FadeUp>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                            {
                                img: "/images/banner/old.png",
                                label: "Then · Pre 1990",
                                caption: "Born in an age where craft was a way of life, our looms carried stories, not signatures.",
                                tag: "Handloom · Village",
                            },
                            {
                                img: "/images/banner/now.png",
                                label: "2024 · Now",
                                caption: "The same hands, the same discipline — creating fabrics for the present without leaving the past behind.",
                                tag: "120 Looms · Global",
                            },
                        ].map((item, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className="relative group overflow-hidden rounded-2xl aspect-4/3">
                                    <Image src={item.img} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="font-mono text-[9px] text-gold uppercase tracking-widest mb-1">{item.tag}</div>
                                        <div className="font-yeseva text-cream text-xl mb-1">{item.label}</div>
                                        <p className="font-pop text-[#c8bfb0] text-sm leading-relaxed">{item.caption}</p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── CORE PILLARS ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    What We Stand On
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15]">
                                The pillars of <em className="text-gold not-italic">Titico</em>
                            </h2>
                        </div>
                    </FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((p, i) => (
                            <FadeUp key={i} delay={0.08 * i}>
                                <div className="border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors duration-300">
                                    <div className="text-3xl mb-4">{p.icon}</div>
                                    <h3 className="font-yeseva text-cream text-xl mb-3">{p.title}</h3>
                                    <p className="font-pop font-light text-[#a09890] text-sm leading-relaxed">{p.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── FOUNDER QUOTE ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="relative max-w-3xl mx-auto text-center py-8">
                            <div className="font-yeseva text-[7rem] text-gold/20 leading-none absolute -top-8 left-0 select-none">"</div>
                            <blockquote className="font-yeseva text-dark text-2xl lg:text-3xl leading-[1.4] mb-6 relative z-10">
                                A fabric speaks before its maker does. Make it speak of patience, of honesty, and of a hand that cared.
                            </blockquote>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-10 h-px bg-gold" />
                                <span className="font-pop text-sm text-[#888] uppercase tracking-widest">Ram Prasad Gupta, Founder · 1978</span>
                                <div className="w-10 h-px bg-gold" />
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* ── CTA ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper className="lg:py-10 py-8">
                    <FadeUp>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="font-yeseva text-dark text-3xl lg:text-4xl mb-2">Continue the journey</h2>
                                <p className="font-pop font-light text-cont text-base">See the craft behind the cloth, or explore our collections.</p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200">
                                    The Craft
                                </button>
                                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200">
                                    Collections
                                </button>
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

        </main>
    );
}