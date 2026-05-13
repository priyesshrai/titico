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
        title: "Flat 30% off signature fabrics",
        desc: "Our most loved textures and patterns — available at special seasonal prices while stock lasts.",
        image: "/images/ads/img-1.png",
        bg: "#2e2010",
        flip: false,
    },
    {
        eyebrow: "New arrivals · Season 2026",
        title: "Fresh weaves, modern finishes",
        desc: "Designed for today's global fashion trends — contemporary patterns built on traditional craft.",
        image: "/images/ads/img-2.png",
        bg: "#1a1208",
        flip: true,
    },
    {
        eyebrow: "Premium range · Export grade",
        title: "Premium fabric collection",
        desc: "Handpicked materials crafted for durability, comfort, and long-lasting beauty — built for international buyers.",
        image: "/images/ads/img-3.png",
        bg: "#0d1a15",
        flip: false,
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
                                    Shop now <ArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}