"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";

const ads = [
    {
        eyebrow: "Limited offer · Ends soon",
        title: "Refined Texture Series",
        desc: "Discover carefully woven fabrics featuring rich textures, layered patterns, and timeless finishes developed for upholstery, interiors, and premium textile applications.",
        image: "/images/ads/img-1.jpeg",
        bg: "#2e2010",
        flip: false,
        ctaName:"View Collection"
    },
    {
        eyebrow: "New arrivals · Season 2026",
        title: "Contemporary Weaves",
        desc: "Modern fabric compositions inspired by global design trends, combining elegant detailing with versatile usage across fashion and furnishing industries.",
        image: "/images/ads/img-2.jpeg",
        bg: "#1a1208",
        flip: true,
        ctaName:"Explore Designs"
    },
    {
        eyebrow: "Premium range · Export grade",
        title: "Heritage Craft Collection",
        desc: "A thoughtfully developed range of fabrics blending traditional weaving aesthetics with modern production standards for long-lasting visual appeal.",
        image: "/images/ads/img-3.jpeg",
        bg: "#0d1a15",
        flip: false,
        ctaName:"See Fabrics"
    },
];

export default function Ads() {
    return (
        <Section className="bg-cream">
            <Wrapper>
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-bold tracking-[.16em] uppercase text-gold">
                            Current offers
                        </span>
                    </div>
                    <h2 className="font-play text-3xl lg:text-4xl font-medium text-dark">
                        Deals worth <em className="italic text-gold">exploring</em>
                    </h2>
                </div>

                <div className="flex flex-col gap-3">
                    {ads.map((ad, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden min-h-55 ${ad.flip ? "md:[direction:rtl]" : ""}`}
                        >
                            {/* Image col */}
                            <div className={`relative min-h-50 ${ad.flip ? "md:[direction:ltr]" : ""}`}>
                                <Image
                                    src={ad.image}
                                    fill
                                    alt={ad.title}
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Body col */}
                            <div
                                className={`flex flex-col justify-center gap-4 p-8 lg:p-10 ${ad.flip ? "md:[direction:ltr]" : ""}`}
                                style={{ background: ad.bg }}
                            >
                                <span className="font-mono text-[9px] font-bold tracking-[.14em] uppercase text-gold">
                                    ↘ {ad.eyebrow}
                                </span>
                                <h3 className="font-play text-white text-xl lg:text-2xl font-medium leading-snug">
                                    {ad.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                                    {ad.desc}
                                </p>
                                <Link
                                    href="/#"
                                    className="inline-flex items-center gap-2 w-fit font-mono text-[10px] font-bold tracking-[.12em] uppercase text-dark bg-gold px-5 py-2.5 rounded-md hover:opacity-85 transition-opacity duration-200 mt-1"
                                >
                                    {ad.ctaName} <ArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}