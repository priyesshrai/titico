"use client";
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from 'react'
import {
    Carousel, CarouselContent, CarouselItem,
    CarouselNext, CarouselPrevious, type CarouselApi
} from "@/src/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { banner } from '../constant/hero_banner';


export default function Hero() {
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (!api) return
        const onSelect = () => setActiveIndex(api.selectedScrollSnap())
        api.on("select", onSelect)
        onSelect()
        return () => { api.off("select", onSelect) }
    }, [api])

    const activeBanner = banner[activeIndex]

    return (
        <Section className='bg-cream'>
            <Wrapper className='lg:py-0 md:py-0 py-0'>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]'>

                    {/* ── Left: Text ── */}
                    <div className='flex flex-col justify-center lg:py-20 py-12 lg:pr-16 lg:pl-4 px-4 order-2 lg:order-1'>

                        {/* Eyebrow */}
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-7 h-px bg-gold' />
                            <span className='font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold'>
                                Varanasi · Est. 1978
                            </span>
                            <div className='w-7 h-px bg-gold' />
                        </div>

                        {/* Headline */}
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h1 className='font-yeseva text-dark text-4xl lg:text-5xl leading-[1.15] mb-5 max-w-md'>
                                    {activeBanner.title}
                                </h1>
                                <p className='font-pop font-light text-cont text-base lg:text-[17px] leading-relaxed max-w-sm mb-9'>
                                    {activeBanner.content}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* CTAs */}
                        <div className='flex items-center gap-3 mb-10'>
                            <button className='font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-3.5 bg-dark text-cream rounded hover:bg-[#2e2b26] transition-colors duration-200'>
                                Explore Collections
                            </button>
                            <button className='font-mono text-[11px] font-semibold tracking-wide uppercase px-5 py-3.5 border border-dark text-dark rounded hover:bg-dark hover:text-cream transition-all duration-200 flex items-center gap-2'>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                                Our Legacy
                            </button>
                        </div>

                        {/* Stats */}
                        <div className='flex items-center gap-6 pt-8 border-t border-[#e4ddd4]'>
                            {[
                                { val: '45+', lbl: 'Years in trade' },
                                { val: '20+', lbl: 'Export countries' },
                                { val: '500+', lbl: 'Fabric SKUs' },
                            ].map((s, i) => (
                                <div key={i} className='flex items-center gap-6'>
                                    <div>
                                        <div className='font-yeseva text-2xl text-dark'>{s.val}</div>
                                        <div className='font-pop text-[10px] text-[#888] mt-0.5 tracking-wide'>{s.lbl}</div>
                                    </div>
                                    {i < 2 && <div className='w-px h-8 bg-[#e4ddd4]' />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Carousel ── */}
                    <div className='relative h-full order-1 lg:order-2 lg:py-10 py-6 lg:pl-6 '>
                        <Carousel
                            className='w-full lg:h-130 md:h-110 h-96'
                            plugins={[plugin.current]}
                            opts={{ loop: true }}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            setApi={setApi}
                        >
                            <CarouselContent className='h-full'>
                                {banner.map((data, key) => (
                                    <CarouselItem key={key} className='h-full'>
                                        <div className='relative w-full h-full overflow-hidden rounded-2xl'>
                                            <Image
                                                src={data.src}
                                                alt={data.alt}
                                                fill
                                                className='object-cover'
                                                priority={key === 0}
                                            />
                                            {/* Slide counter overlay */}
                                            <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-black/5'>
                                                <div className='font-mono text-[9px] font-semibold tracking-widest uppercase text-[#888] mb-0.5'>Collection</div>
                                                <div className='font-yeseva text-sm text-dark'>{data.alt.split(' ').slice(0, 2).join(' ')}</div>
                                            </div>
                                            {/* Slide number */}
                                            <div className='absolute top-4 right-4 bg-white/80 rounded px-2.5 py-1'>
                                                <span className='font-mono text-xs text-dark font-semibold'>
                                                    {String(activeIndex + 1).padStart(2, '0')} / {String(banner.length).padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Custom nav */}
                            <div className='absolute -bottom-5 right-4 flex items-center gap-2 z-10'>
                                <CarouselPrevious
                                    onClick={() => { api?.scrollPrev(); plugin.current?.reset() }}
                                    className='static translate-y-0 w-9 h-9 bg-dark text-white border-none rounded hover:bg-gold hover:text-dark transition-colors duration-200'
                                />
                                {/* Dot indicators */}
                                <div className='flex items-center gap-1.5 px-2'>
                                    {banner.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-0.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-5 bg-dark' : 'w-1.5 bg-[#ccc]'}`}
                                        />
                                    ))}
                                </div>
                                <CarouselNext
                                    onClick={() => { api?.scrollNext(); plugin.current?.reset() }}
                                    className='static translate-y-0 w-9 h-9 bg-dark text-white border-none rounded hover:bg-gold hover:text-dark transition-colors duration-200'
                                />
                            </div>
                        </Carousel>
                    </div>

                </div>
            </Wrapper>
        </Section>
    )
}