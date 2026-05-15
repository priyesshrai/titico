"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from 'react';
import Image from 'next/image';
import Section from "@/src/components/ui/section";
import Wrapper from "@/src/components/ui/wrapper";
import { FadeUp } from "@/src/lib/fade_up";
import { categories, Category, Product, products } from "@/src/constant/collections_data";


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
                    src="/images/banner/collections.png"
                    alt="Titico Collections — artisan weaving in Varanasi loom hall"
                    fill
                    className="object-cover saturate-0"
                    priority
                />
            </motion.div>

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
                                Premium Fabric Collections
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>
                        <h1 className="font-yeseva text-cream text-5xl lg:text-[5.5rem] leading-[1.05] mb-6 max-w-4xl">
                            Fabrics designed <br />
                            <em className="text-gold not-italic">for every requirement</em>
                        </h1>
                        <p className="font-pop font-light text-[#c8bfb0] text-lg leading-relaxed max-w-xl">
                            Explore our collection of Silk, Cotton, Linen, Ikat, Silk-Cotton, Tweed, and Herringbone fabrics crafted for Home & Fashion industries with a focus on quality, texture, and refined finishing.
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

export default function CollectionsPage() {
    const [active, setActive] = useState<Category>("All");

    const filtered = active === "All" ? products : products.filter((p) => p.category === active);

    return (
        <main>

            {/* ── HERO ── */}
            <ParallaxHero />

            {/* ── FILTER + GRID ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>

                    {/* Filter pills */}
                    <FadeUp>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`font-mono text-[11px] font-semibold tracking-wide uppercase px-4 py-2 rounded transition-all duration-200 ${active === cat
                                        ? "bg-dark text-cream"
                                        : "bg-white text-dark border border-[#d8cfc4] hover:border-dark"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((product, i) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>

                </Wrapper>
            </Section>

            {/* ── CUSTOM ORDERS ── */}
            <Section className="bg-dark">
                <Wrapper>
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-7 h-px bg-gold" />
                                    <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                        Bespoke Orders
                                    </span>
                                </div>
                                <h2 className="font-yeseva text-cream text-4xl lg:text-5xl leading-[1.15] mb-6">
                                    Don't see your <em className="text-gold not-italic">requirement?</em>
                                </h2>
                                <p className="font-pop font-light text-[#b0a898] text-[17px] leading-relaxed mb-6">
                                    We work with fashion houses, interior studios, and export buyers to develop custom fabrics — specific counts, constructions, colourways, and finishes. Minimum order quantities are flexible for established relationships.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {[
                                        "Custom weave construction",
                                        "Brand-matched colourways",
                                        "Private label garment production",
                                        "Sample development in 7–10 days",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 font-pop text-sm text-[#a09890]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-gold text-dark rounded hover:bg-[#d4ad60] transition-colors duration-200">
                                    Request a Sample
                                </button>
                            </div>
                            <div className="relative h-80 lg:h-auto lg:aspect-square rounded-2xl overflow-hidden">
                                <Image src="/images/collections/collections.png" alt="Fabric sampling at Titico" fill className="object-cover" />
                                <div className="absolute inset-0 bg-linear-to-br from-dark/30 to-transparent" />
                            </div>
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>

        </main>
    );
}

/* ─── Product Card ─── */
function ProductCard({ product }: { product: Product }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-dark/90 text-cream font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
                    {product.tag}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-dark font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-1">{product.highlight}</div>
                <h3 className="font-yeseva text-dark text-xl mb-0.5">{product.name}</h3>
                <p className="font-pop text-[11px] text-[#999] uppercase tracking-wider mb-3">{product.subtitle}</p>

                {/* Description */}
                <p className={`font-pop font-light text-cont text-sm leading-relaxed mb-4 ${!expanded ? "line-clamp-2" : ""}`}>
                    {product.description}
                </p>

                {/* Use cases */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.useCase.map((u) => (
                        <span key={u} className="font-mono text-[10px] uppercase tracking-wide text-[#888] bg-[#f3ede4] px-2 py-0.5 rounded">
                            {u}
                        </span>
                    ))}
                </div>

                {/* Origin */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#f0ebe3] mt-auto">
                    <div className="w-4 h-px bg-gold" />
                    <span className="font-pop text-[11px] text-[#999]">Origin: {product.origin}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 font-mono text-[10px] font-semibold tracking-wide uppercase py-2.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200">
                        Request Quote
                    </button>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="font-mono text-[10px] font-semibold tracking-wide uppercase px-3 py-2.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200"
                    >
                        {expanded ? "Less" : "More"}
                    </button>
                </div>
            </div>
        </div>
    );
}