"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from 'next/image';
import Section from '@/src/components/ui/section';
import Wrapper from '@/src/components/ui/wrapper';
import { pillars, timeline } from '@/src/constant/legacy';
import { FadeUp } from '@/src/lib/fade_up';
import { BadgeCheck, Globe2, Sparkle } from "lucide-react";

function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div ref={ref} className="relative w-full h-[92vh] overflow-hidden">

            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src="/images/banner/our_legacy.png"
                    alt="Titico legacy — looms and artisans of Varanasi"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* ── BACKGROUND: VIDEO (commented — replace image with this once video is ready) ──
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <video
                    src="/videos/legacy-hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
            ── END VIDEO ── */}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/70 via-dark/30 to-dark/85" />

            {/* Hero content */}
            <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-7 h-px bg-gold" />
                            <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                {/* Varanasi · Est. 1978 */}
                                Crafted for Global Markets
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            A Legacy of<br />
                            <em className="text-gold not-italic">Fine Fabrics</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-xl">
                            We are engaged in manufacturing and export of Linen, Silk & Polyester fabrics for Home & Fashion industries. With a focus on quality, craftsmanship, and consistency, we deliver fabrics trusted by clients across international markets.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative large numeral watermark */}
            <div className="absolute right-8 bottom-16 font-yeseva text-[18rem] text-white/15 select-none leading-none hidden lg:block pointer-events-none">
                1978
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 rotate-90 origin-center mb-4">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="w-px h-10 bg-linear-to-b from-gold to-transparent"
                />
            </motion.div>
        </div>
    );
}

function ParallaxBand({ src, alt }: { src: string; alt: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className="relative w-full h-[40vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-125">
                <Image src={src} alt={alt} fill className="object-cover saturate-0" />
            </motion.div>
            <div className="absolute inset-0 bg-dark/50" />
        </div>
    );
}


export default function LegacyPage() {
    return (
        <main>

            {/* ── 1. PARALLAX HERO ── */}
            <ParallaxHero />

            {/* ── 2. OPENING STATEMENT ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeUp>
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl" />
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/legacy/img-1.png"
                                        alt="Titico early years — handloom weaving in Varanasi"
                                        fill
                                        className="saturate-0 object-cover"
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
                                        Our Journey
                                    </span>
                                </div>
                                <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-6">
                                    Fabric is not made.{" "}
                                    <em className="text-gold not-italic"> It is crafted with experience.</em>
                                </h2>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-4">
                                    Our journey began with a passion for creating premium-quality fabrics for home and fashion applications. Over the years, we have built strong expertise in manufacturing Linen, Silk & Polyester fabrics that combine durability, texture, and elegant finishes.
                                </p>
                                <p className="font-pop font-light text-cont text-[17px] leading-relaxed mb-6">
                                    Today, we continue serving clients with dependable production, quality standards, and a commitment to long-term business relationships.
                                </p>
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e4ddd4]">
                                    {[
                                        { icon: Sparkle, lbl: "Premium Fabrics" },
                                        { icon: Globe2, lbl: "Global Reach" },
                                        { icon: BadgeCheck, lbl: "Trusted Quality" },
                                    ].map((s) => (
                                        <div key={s.lbl} className="flex flex-col gap-2">
                                            <div className="text-gold">
                                                {<s.icon strokeWidth={1} />}
                                            </div>
                                            <div className="font-pop text-xs text-[#888] mt-0.5 tracking-wide">
                                                {s.lbl}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* ── 3. TIMELINE ── */}
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

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d8cfc4] hidden lg:block" />
                        <div className="flex flex-col gap-0">
                            {timeline.map((item, i) => {
                                const isLeft = item.side === "left";
                                return (
                                    <FadeUp key={i} delay={0.05 * i}>
                                        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-0 py-10">
                                            <div className={`lg:pr-12 ${isLeft ? "lg:text-right" : "lg:opacity-0 lg:pointer-events-none"}`}>
                                                {isLeft && (
                                                    <>
                                                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">{item.era}</div>
                                                        <h3 className="font-yeseva text-dark text-2xl mb-2">{item.title}</h3>
                                                        <p className="font-pop font-light text-cont text-sm leading-relaxed">{item.body}</p>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-center gap-2 lg:w-24 shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-dark border-4 border-gold flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-gold" />
                                                </div>
                                                <span className="font-yeseva text-sm text-dark">{item.year}</span>
                                            </div>
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

            {/* ── 4. PARALLAX BAND (between timeline and then/now) ── */}
            <ParallaxBand
                src="/images/banner/our_legacy_01.png"
                alt="Titico artisans at work — Varanasi weaving floor"
            />

            {/* ── 5. THEN VS NOW ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Then &amp; Now
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                The same quality, <em className="text-gold not-italic">for generations</em>
                            </h2>
                        </div>
                    </FadeUp>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                            {
                                img: "/images/legacy/old.png",
                                label: "Then · Our Early Journey",
                                caption: "Built on craftsmanship, dedication, and textile expertise, our foundation continues to inspire our work today.",
                                tag: "Handloom · Village",
                            },
                            {
                                img: "/images/legacy/now.png",
                                label: "Today · Modern Excellence",
                                caption: "Combining experience with modern manufacturing support to deliver quality fabrics for global markets.",
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

            {/* ── 6. CORE PILLARS ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    What We Stand For
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15]">
                                The pillars of <em className="text-gold not-italic">Our Company</em>
                            </h2>
                        </div>
                    </FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((p, i) => (
                            <FadeUp key={i} delay={0.08 * i}>
                                <div className="border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors duration-300">
                                    <div className="text-3xl mb-4 text-gold">
                                        {<p.icon size={24} />}
                                    </div>
                                    <h3 className="font-yeseva text-cream text-xl mb-3">{p.title}</h3>
                                    <p className="font-pop font-light text-[#a09890] text-sm leading-relaxed">{p.body}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── 7. PARALLAX BAND (before founder quote) ── */}
            <ParallaxBand
                src="/images/banner/our_legacy_02.png"
                alt="Titico fabric detail — woven in Varanasi"
            />

            {/* ── 8. FOUNDER QUOTE ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="relative max-w-3xl mx-auto text-center py-8">
                            <div className="font-yeseva text-[7rem] text-gold/20 leading-none absolute -top-8 left-0 select-none">"</div>
                            <blockquote className="font-yeseva text-dark text-2xl lg:text-3xl leading-[1.4] mb-6 relative z-10">
                                Quality fabrics reflect the care, craftsmanship, and commitment behind every thread
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

            {/* ── 9. CTA ── */}
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