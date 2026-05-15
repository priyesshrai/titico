"use client";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from 'react';
import Image from 'next/image';
import Section from "@/src/components/ui/section";
import Wrapper from "@/src/components/ui/wrapper";
import { numbers, artisans, looms, stages } from "@/src/constant/data";
import { FadeUp } from "@/src/lib/fade_up";

function FadeIn({
    children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay }}
            className={className}>
            {children}
        </motion.div>
    );
}

/* Parallax hero image */
function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <div ref={ref} className="relative w-full h-[92vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src="/images/banner/manufacturing.png"
                    alt="Titico manufacturing floor — Varanasi loom hall"
                    fill
                    className="object-cover saturate-0"
                    priority
                />
            </motion.div>
            {/* Dark gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-dark/60 via-dark/50 to-dark/80" />
            {/* Content */}
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
                                Varanasi · 12,000 sq ft · Est. 1978
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            Rooted in process<br />
                            <em className="text-gold not-italic">&amp; precision</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-xl">
                            Inside our Varanasi facility — the looms, the dye vats, the artisans, and the six-stage process that turns raw yarn into fabric worthy of export.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 rotate-90 origin-center mb-4">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    className="w-px h-10 bg-linear-to-b from-gold to-transparent"
                />
            </motion.div>
        </div>
    );
}

/* Numbers strip */
function NumbersStrip() {
    return (
        <Section className="bg-dark border-y border-white/5">
            <Wrapper className="lg:py-8 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0 divide-x divide-white/10">
                    {numbers.map((n, i) => (
                        <FadeIn key={i} delay={0.05 * i}>
                            <div className="flex flex-col items-center text-center px-4 py-2">
                                <div className="font-yeseva text-2xl lg:text-3xl text-gold leading-none mb-1">{n.val}</div>
                                <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-cream/70 mb-0.5">{n.label}</div>
                                <div className="font-pop text-[10px] text-white/35 leading-tight hidden lg:block">{n.sub}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}

/* Full-bleed process stage */
function ProcessStage({ stage, index }: { stage: typeof stages[0]; index: number }) {
    const imgRight = stage.imgRight;

    return (
        <Section className={stage.accent}>
            <Wrapper>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${imgRight ? "" : "lg:flex lg:flex-row-reverse"}`}>

                    {/* Text */}
                    <FadeUp delay={0.05}>
                        <div className={imgRight ? "" : "lg:pl-0"}>
                            {/* Stage badge */}
                            <div className="flex items-center gap-4 mb-7">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gold/40 bg-dark shrink-0">
                                    <span className="font-yeseva text-gold text-sm">{stage.id}</span>
                                </div>
                                <div>
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-gold">{stage.phase}</div>
                                    <div className="font-pop text-[11px] text-[#888]">{stage.subtitle}</div>
                                </div>
                            </div>

                            <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.1] mb-6">
                                {stage.title}
                            </h2>

                            {/* Body — split into paragraphs */}
                            <div className="space-y-4 mb-8">
                                {stage.body.split("\n\n").map((para, i) => (
                                    <p key={i} className="font-pop font-light text-cont text-[16px] leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Fact pills */}
                            <div className="flex flex-col gap-3 pt-6 border-t border-[#d8cfc4]">
                                {stage.facts.map((f, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                        <span className="font-yeseva text-dark text-lg leading-none w-36 shrink-0">{f.value}</span>
                                        <span className="font-pop text-[12px] text-[#888]">{f.label}{f.note ? ` — ${f.note}` : ""}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    {/* Image */}
                    <FadeUp delay={0.12}>
                        <div className="relative">
                            {/* Offset border decoration */}
                            <div className={`absolute ${imgRight ? "-bottom-5 -right-5" : "-bottom-5 -left-5"} w-full h-full border border-gold/25 rounded-2xl`} />
                            <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                                <Image
                                    src={stage.img}
                                    alt={stage.imgAlt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000 saturate-0"
                                />
                                {/* Stage watermark */}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-dark/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                                        <div className="font-mono text-[9px] uppercase tracking-widest text-gold">Stage {stage.id}</div>
                                        <div className="font-yeseva text-cream text-sm">{stage.phase}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                </div>
            </Wrapper>
        </Section>
    );
}

/* Loom types */
function LoomTypes() {
    const [active, setActive] = useState(0);
    const loom = looms[active];

    return (
        <Section className="bg-dark">
            <Wrapper>
                <FadeUp>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                            Our Equipment
                        </span>
                    </div>
                    <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15] mb-14">
                        Four loom types,<br />
                        <em className="text-gold not-italic">one standard</em>
                    </h2>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">

                    {/* Tab buttons */}
                    <FadeUp>
                        <div className="flex flex-col gap-2">
                            {looms.map((l, i) => (
                                <button
                                    key={l.name}
                                    onClick={() => setActive(i)}
                                    className={`group text-left px-5 py-4 rounded-xl border transition-all duration-300 ${active === i
                                        ? "border-gold bg-gold/10"
                                        : "border-white/10 hover:border-white/30"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className={`font-mono text-2xl leading-none transition-colors ${active === i ? "text-gold" : "text-white/30"}`}>
                                                {l.icon}
                                            </span>
                                            <div>
                                                <div className={`font-yeseva text-lg leading-none transition-colors ${active === i ? "text-cream" : "text-white/60"}`}>
                                                    {l.name}
                                                </div>
                                                <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-0.5">{l.count}</div>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ x: active === i ? 0 : -4, opacity: active === i ? 1 : 0 }}
                                            className="text-gold font-mono text-lg"
                                        >→</motion.div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Active loom detail */}
                    <FadeUp delay={0.08}>
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-2">{loom.count}</div>
                            <h3 className="font-yeseva text-cream text-3xl mb-4">{loom.name} Loom</h3>
                            <p className="font-pop font-light text-[#a09890] text-[16px] leading-relaxed mb-6">
                                {loom.desc}
                            </p>
                            <div className="border-t border-white/10 pt-5">
                                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Best for</div>
                                <div className="font-pop text-sm text-gold">{loom.best}</div>
                            </div>
                            {/* Visual block */}
                            <div className="mt-6 relative aspect-video rounded-xl overflow-hidden">
                                <Image
                                    src={loom.image}
                                    alt={`${loom.name} loom at Titico`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/40" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="font-yeseva text-cream text-xl">{loom.name}</span>
                                </div>
                            </div>
                        </motion.div>
                    </FadeUp>

                </div>
            </Wrapper>
        </Section>
    );
}

/* Artisan spotlight */
function ArtisanSpotlight() {
    const [activeArtisan, setActiveArtisan] = useState(0);
    const a = artisans[activeArtisan];

    return (
        <Section className="bg-[#f3ede4]">
            <Wrapper>
                <FadeUp>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                            The People
                        </span>
                    </div>
                    <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-14">
                        Artisans of <em className="text-gold not-italic">Titico</em>
                    </h2>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">

                    {/* Artisan selector list */}
                    <FadeUp>
                        <div className="flex flex-col gap-3">
                            {artisans.map((artisan, i) => (
                                <button
                                    key={artisan.name}
                                    onClick={() => setActiveArtisan(i)}
                                    className={`group text-left rounded-xl border p-4 transition-all duration-300 ${activeArtisan === i
                                        ? "border-dark bg-dark"
                                        : "border-[#d8cfc4] bg-white hover:border-dark/40"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Avatar placeholder */}
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-gold/30">
                                            <Image src={artisan.img} alt={artisan.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className={`font-yeseva text-lg leading-none mb-1 transition-colors ${activeArtisan === i ? "text-cream" : "text-dark"}`}>
                                                {artisan.name}
                                            </div>
                                            <div className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${activeArtisan === i ? "text-gold" : "text-[#aaa]"}`}>
                                                {artisan.role}
                                            </div>
                                        </div>
                                        <div className={`ml-auto font-pop text-[11px] shrink-0 transition-colors ${activeArtisan === i ? "text-white/50" : "text-[#bbb]"}`}>
                                            {artisan.exp}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Active artisan detail */}
                    <FadeUp delay={0.1}>
                        <motion.div
                            key={activeArtisan}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Large image */}
                            <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-6 group">
                                <Image
                                    src={a.img}
                                    alt={`${a.name} — ${a.role} at Titico Textiles`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-dark/75 via-dark/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-1">
                                        {a.exp} experience
                                    </div>
                                    <div className="font-yeseva text-cream text-2xl mb-0.5">{a.name}</div>
                                    <div className="font-pop text-[12px] text-[#c0b8b0]">{a.role}</div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative pl-5 border-l-2 border-gold mb-5">
                                <p className="font-pop text-[15px] italic text-dark leading-relaxed">
                                    "{a.quote}"
                                </p>
                            </div>

                            {/* Specialty */}
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-[#aaa] mb-2">Specialises in</div>
                                <div className="font-pop text-sm text-dark">{a.specialty}</div>
                            </div>
                        </motion.div>
                    </FadeUp>

                </div>
            </Wrapper>
        </Section>
    );
}

/* Factory photo essay — masonry-style grid */
function FactoryEssay() {
    const images = [
        { src: "/images/banner/banner-1.png", alt: "Warp yarns stretched across the loom frame", span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-square" },
        { src: "/images/fabric/silk.jpeg", alt: "Raw silk skeins before dyeing", span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-video" },
        { src: "/images/fabric/ikat.jpeg", alt: "Ikat resist-dyed warp yarns", span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-video" },
        { src: "/images/banner/banner-3.png", alt: "Artisan checking fell of cloth", span: "lg:col-span-1 lg:row-span-2", aspect: "aspect-[3/5]" },
        { src: "/images/fabric/cotton.jpeg", alt: "Cotton fabric off the loom", span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-video" },
        { src: "/images/fabric/linen.jpeg", alt: "Finished linen before finishing unit", span: "lg:col-span-1 lg:row-span-1", aspect: "aspect-video" },
    ];

    return (
        <Section className="bg-cream">
            <Wrapper>
                <FadeUp>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                            Inside the facility
                        </span>
                    </div>
                    <h2 className="font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-10">
                        The factory <em className="text-gold not-italic">in frame</em>
                    </h2>
                </FadeUp>

                {/* Grid */}
                <FadeIn>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-xl group ${img.span} ${img.aspect}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                    <p className="font-pop text-[11px] text-cream leading-snug">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Wrapper>
        </Section>
    );
}

/* Commitment strip */
function CommitmentStrip() {
    const items = [
        { icon: "🌿", title: "Chemical responsibility", body: "REACH-compliant dyes, OEKO-TEX certified inputs. No banned substances, no compromise." },
        { icon: "💧", title: "Water stewardship", body: "80% of process water is recovered and reused through a closed-loop effluent system." },
        { icon: "🧑‍🤝‍🧑", title: "Artisan welfare", body: "Above-market wages, year-round employment, and healthcare for all production staff." },
        { icon: "📋", title: "Full traceability", body: "Each lot code traces back to the warp beam, dye batch, and loom that produced it." },
    ];

    return (
        <Section className="bg-dark">
            <Wrapper>
                <FadeUp>
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-7 h-px bg-gold" />
                            <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                Our Commitments
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15]">
                            Manufacturing with <em className="text-gold not-italic">conscience</em>
                        </h2>
                    </div>
                </FadeUp>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((item, i) => (
                        <FadeUp key={i} delay={0.07 * i}>
                            <div className="border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group h-full">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="font-yeseva text-cream text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="font-pop font-light text-[#a09890] text-sm leading-relaxed">{item.body}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}

/* CTA */
function PageCTA() {
    return (
        <Section className="bg-[#f3ede4]">
            <Wrapper className="lg:py-12 py-10">
                <FadeUp>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Next step</div>
                            <h2 className="font-yeseva text-dark text-3xl lg:text-4xl mb-2">
                                See what the process produces
                            </h2>
                            <p className="font-pop font-light text-cont text-base">
                                Browse 500+ fabric SKUs, or request your first sample in 7–10 days.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200">
                                View Collections
                            </button>
                            <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200">
                                Request Sample
                            </button>
                        </div>
                    </div>
                </FadeUp>
            </Wrapper>
        </Section>
    );
}

export default function ManufacturingPage() {
    return (
        <main>
            {/* 1 — Parallax hero */}
            <ParallaxHero />

            {/* 2 — Numbers strip */}
            <NumbersStrip />

            {/* 3 — Six process stages, alternating layout */}
            {stages.map((stage, i) => (
                <ProcessStage key={stage.id} stage={stage} index={i} />
            ))}

            {/* 4 — Loom type explorer */}
            <LoomTypes />

            {/* 5 — Artisan spotlight */}
            <ArtisanSpotlight />

            {/* 6 — Factory photo essay */}
            <FactoryEssay />

            {/* 7 — Responsibility commitments */}
            <CommitmentStrip />

            {/* 8 — CTA */}
            <PageCTA />
        </main>
    );
}