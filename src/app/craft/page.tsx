"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from 'react';
import Image from 'next/image';
import Section from "@/src/components/ui/section";
import Wrapper from "@/src/components/ui/wrapper";
import { FadeUp } from "@/src/lib/fade_up";
import { stats, materials, steps } from "@/src/constant/craft";

function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div ref={ref} className="relative w-full h-[92vh] overflow-hidden">

            {/* ── BACKGROUND: IMAGE (active) ── */}
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src="/images/banner/banner-2.png"
                    alt="Titico craft — artisan weaving in Varanasi loom hall"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* ── BACKGROUND: VIDEO (commented — replace image with this once video is ready) ──
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <video
                    src="/videos/craft-hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
            ── END VIDEO ── */}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/60 via-dark/25 to-dark/85" />

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
                                Premium Fabric Manufacturing
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            Crafted with<br />
                            <em className="text-gold not-italic">quality and precision</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-xl">
                            From sourcing premium yarns to delivering finished fabrics, every stage of our process focuses on quality, consistency, and refined craftsmanship for Home & Fashion industries.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative numeral watermark */}
            <div className="absolute right-8 bottom-16 font-yeseva text-[20rem] text-white/10 leading-none select-none hidden lg:block pointer-events-none">
                120
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
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className="relative w-full h-[40vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-125">
                <Image src={src} alt={alt} fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-dark/50" />
        </div>
    );
}


export default function CraftPage() {
    const [openStep, setOpenStep] = useState<number | null>(0);

    return (
        <main>

            {/* ── 1. PARALLAX HERO ── */}
            <ParallaxHero />

            {/* ── 2. STATS STRIP ── */}
            <Section className="bg-dark border-y border-white/5">
                <Wrapper className="lg:py-8 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-x divide-white/10">
                        {stats.map((s, i) => (
                            <FadeUp key={i} delay={0.05 * i}>
                                <div className="text-center">
                                    <div className="font-yeseva text-gold text-3xl">{s.val}</div>
                                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold/70 mt-0.5">{s.unit}</div>
                                    {/* <div className="font-pop text-[10px] text-gold/60 mt-1 leading-tight">{s.desc}</div> */}
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── 3. PROCESS ACCORDION ── */}
            <Section className="bg-cream">
                <Wrapper>
                    <FadeUp>
                        <div className="mb-14">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Our Process
                                </span>
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                From yarn to <em className="text-gold not-italic">finished fabric</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">

                        {/* Accordion */}
                        <div className="flex flex-col gap-2">
                            {steps.map((step, i) => {
                                const isOpen = openStep === i;
                                return (
                                    <FadeUp key={i} delay={0.04 * i}>
                                        <button
                                            onClick={() => setOpenStep(isOpen ? null : i)}
                                            className={`w-full text-left rounded-xl border transition-all duration-300 ${isOpen
                                                ? "border-gold bg-dark"
                                                : "border-[#e4ddd4] bg-white hover:border-dark"
                                                }`}
                                        >
                                            {/* Header */}
                                            <div className="flex items-center gap-4 p-4">
                                                <div className={`font-mono text-[10px] font-bold tracking-widest uppercase shrink-0 ${isOpen ? "text-gold" : "text-[#aaa]"}`}>
                                                    {step.number}
                                                </div>
                                                <div className={isOpen ? "text-gold":"text-dark"}>
                                                    {<step.icon size={20} strokeWidth={1} />}
                                                </div>
                                                <div className="flex-1">
                                                    <div className={`font-mono text-[9px] uppercase tracking-widest mb-0.5 ${isOpen ? "text-gold/70" : "text-[#bbb]"}`}>
                                                        {step.phase}
                                                    </div>
                                                    <div className={`font-yeseva text-lg leading-none ${isOpen ? "text-cream" : "text-dark"}`}>
                                                        {step.title}
                                                    </div>
                                                </div>
                                                <div className={`font-mono text-xs transition-transform duration-300 ${isOpen ? "rotate-45 text-gold" : "text-[#aaa]"}`}>
                                                    +
                                                </div>
                                            </div>

                                            {/* Expanded */}
                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-5 pt-0">
                                                    <p className="font-pop font-light text-[#a09890] text-sm leading-relaxed mb-4">
                                                        {step.body}
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                                        {step.tags.map((t) => (
                                                            <span key={t} className="font-mono text-[9px] uppercase tracking-wide text-gold/80 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="border-l-2 border-gold/40 pl-3">
                                                        <p className="font-pop text-[11px] italic text-[#888] leading-relaxed">
                                                            {step.detail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </button>
                                    </FadeUp>
                                );
                            })}
                        </div>

                        {/* Sticky visual */}
                        <div className="lg:sticky lg:top-24">
                            <FadeUp>
                                <div className="relative aspect-3/4 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/banner/banner-2.png"
                                        alt="Weaving at Titico Textiles factory"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="font-mono text-[9px] text-gold uppercase tracking-widest mb-1">Inside the loom hall</div>
                                        <p className="font-pop text-[#c8bfb0] text-sm leading-relaxed">
                                            120 looms operating simultaneously — from Jacquard brocade to pit-loom handwoven silk.
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── 4. PARALLAX BAND (between process and materials) ── */}
            <ParallaxBand
                src="/images/banner/banner-1.png"
                alt="Titico loom hall — yarn winding process"
            />

            {/* ── 5. MATERIALS ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>
                    <FadeUp>
                        <div className="text-center mb-14">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Raw Materials
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15]">
                                What we <em className="text-gold not-italic">weave with</em>
                            </h2>
                        </div>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {materials.map((mat, i) => (
                            <FadeUp key={i} delay={0.07 * i}>
                                <div className="bg-white rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-44 overflow-hidden">
                                        <Image
                                            src={mat.img}
                                            alt={mat.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-1">{mat.origin}</div>
                                        <h3 className="font-yeseva text-dark text-lg mb-3">{mat.name}</h3>
                                        <ul className="space-y-1">
                                            {mat.props.map((p) => (
                                                <li key={p} className="flex items-center gap-2 font-pop text-[11px] text-[#888]">
                                                    <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── 6. ARTISAN COMMITMENT ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                                <Image src="/images/banner/banner-2.png" alt="Artisan at Titico" fill className="object-cover" />
                                <div className="absolute inset-0 bg-linear-to-br from-dark/40 to-transparent" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-px bg-gold" />
                                    <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                        Our Expertise
                                    </span>
                                </div>
                                <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15] mb-6">
                                    Quality remains at the <em className="text-gold not-italic">heart of every fabric</em>
                                </h2>
                                <p className="font-pop font-light text-[#b0a898] text-[17px] leading-relaxed mb-5">
                                    Our manufacturing process combines experience, skilled workmanship, and quality-focused production to create fabrics that meet modern market requirements. Every fabric category is developed with attention to texture, durability, and finishing standards.
                                </p>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                                    {[
                                        { val: "Premium", lbl: "Fabric Collection" },
                                        { val: "Quality", lbl: "Manufacturing Support" },
                                        { val: "Global", lbl: "Supply Capability" },
                                    ].map((s) => (
                                        <div key={s.lbl}>
                                            <div className="font-yeseva text-2xl text-gold">{s.val}</div>
                                            <div className="font-pop text-[11px] text-[#888] mt-0.5 tracking-wide">{s.lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

            {/* ── 7. CTA ── */}
            <Section className="bg-cream">
                <Wrapper className="lg:py-10 py-8">
                    <FadeUp>
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="font-yeseva text-dark text-3xl lg:text-4xl mb-2">See what the craft produces</h2>
                                <p className="font-pop font-light text-cont text-base">Browse 500+ fabric SKUs across silk, cotton, linen, and more.</p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200">
                                    View Collections
                                </button>
                                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

        </main>
    );
}