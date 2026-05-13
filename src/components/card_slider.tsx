import Section from './ui/section'
import Wrapper from './ui/wrapper'
import SliderWrapper from './slider_wrapper'
import { EmblaOptionsType } from 'embla-carousel'
import Card from './card'
import Image from 'next/image'
import Link from 'next/link'
import { Star, StarHalf, ArrowRight } from 'lucide-react'
import { data } from '../constant/product_data'

function StarRating({ rating }: { rating: number }) {
    const full = Math.floor(rating)
    const half = rating - full >= 0.25
    const empty = 5 - full - (half ? 1 : 0)
    return (
        <span className="flex items-center gap-0.5">
            {Array.from({ length: full }).map((_, i) => (
                <Star key={`f${i}`} size={11} fill="#c8a35a" stroke="none" />
            ))}
            {half && <StarHalf size={11} fill="#c8a35a" stroke="none" />}
            {Array.from({ length: empty }).map((_, i) => (
                <Star key={`e${i}`} size={11} fill="rgba(200,163,90,0.25)" stroke="none" />
            ))}
        </span>
    )
}

export default function CardSlider() {
    const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }

    return (
        <Section className="bg-white overflow-hidden py-16">

            {/* ── Header ── */}
            <div className="flex flex-col items-center text-center px-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-px bg-gold" />
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                        Export Collection
                    </span>
                    <div className="w-7 h-px bg-gold" />
                </div>
                <h2 className="font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2">
                    Top Exported <em className="italic text-gold">Fabrics</em>
                </h2>
                <p className="text-sub text-sm max-w-sm leading-tight">
                    Our most demanded materials — trusted by buyers in 20+ countries worldwide.
                </p>
            </div>

            {/* ── Nav row ── */}
            <div className="flex items-center justify-between px-6 max-w-7xl mx-auto mb-4">
                <span className="font-mono text-[9px] font-semibold tracking-[0.12em] uppercase text-[#888]">
                    Drag to explore
                </span>
                {/* Prev/Next wired via embla if needed */}
                {/* <div className="flex gap-2">
                    <button
                        aria-label="Previous"
                        className="w-8 h-8 rounded border border-dark/20 flex items-center justify-center text-dark hover:bg-dark hover:text-cream transition-colors duration-200"
                    >
                        <ArrowRight size={13} className="rotate-180" />
                    </button>
                    <button
                        aria-label="Next"
                        className="w-8 h-8 rounded bg-dark border border-dark flex items-center justify-center text-cream hover:bg-gold hover:border-gold hover:text-dark transition-colors duration-200"
                    >
                        <ArrowRight size={13} />
                    </button>
                </div> */}
            </div>

            {/* ── Slider ── */}
            <SliderWrapper options={OPTIONS} className="gap-4 px-6">
                {data.map((item, idx) => (
                    <Card
                        key={idx}
                        idx={idx}
                        className="relative rounded-xl overflow-hidden shrink-0 w-60 h-72 group cursor-pointer"
                    >
                        <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(20,16,10,0.92)_0%,transparent_100%)] z-10" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                            {/* Category tag */}
                            <span className="inline-block font-mono text-[8px] font-semibold tracking-[0.12em] uppercase text-gold bg-[rgba(200,163,90,0.15)] border border-[rgba(200,163,90,0.35)] rounded px-2 py-0.5 mb-2.5">
                                {item.category}
                            </span>

                            <div className="font-play text-[#f0ede8] text-[15px] font-medium leading-tight mb-1.5">
                                {item.name}
                            </div>
                            <div className="font-pop font-light text-[rgba(240,237,232,0.6)] text-[11px] leading-snug mb-3">
                                {item.content}
                            </div>

                            {item.rating && (
                                <div className="flex items-center justify-between">
                                    <StarRating rating={item.rating} />
                                    <span className="font-mono text-[10px] font-semibold text-[rgba(240,237,232,0.65)]">
                                        {item.rating.toFixed(1)}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Hover arrow */}
                        <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-[rgba(249,246,241,0.9)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ArrowRight size={11} className="text-dark -rotate-45" />
                        </div>
                    </Card>
                ))}
            </SliderWrapper>

            {/* ── See all CTA ── */}
            <div className="flex justify-center mt-10 px-6">
                <Link
                    href="/#"
                    className="font-mono text-xs font-semibold tracking-widest uppercase px-6 py-3 border border-dark/20 text-dark rounded hover:bg-dark hover:text-cream hover:border-dark transition-all duration-200 flex items-center gap-2.5"
                >
                    <ArrowRight size={12} />
                    View all collections
                </Link>
            </div>

        </Section>
    )
}