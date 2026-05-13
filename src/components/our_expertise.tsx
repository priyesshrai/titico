import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import Card from './card'
import SliderWrapper from './slider_wrapper'
import { ArrowRight } from 'lucide-react'

interface Data {
    src: string
    name: string
    content?: string
}

export default function OurExpertise() {
    const data: Data[] = [
        {
            src: "/images/our/img-1.png",
            name: "Fashion & Apparel",
            content: "Stylish, breathable fabrics designed for modern everyday wear.",
        },
        {
            src: "/images/our/img-2.png",
            name: "Home Furnishing",
            content: "Elegant textiles crafted to elevate comfort and interior aesthetics.",
        },
        {
            src: "/images/our/img-3.png",
            name: "Upholstery",
            content: "Durable, high-performance fabrics made for long-lasting furniture use.",
        },
        {
            src: "/images/our/img-4.png",
            name: "Workwear",
            content: "Strong, comfortable materials built to perform in demanding environments",
        },
        {
            src: "/images/our/img-3.png",
            name: "Upholstery",
            content: "Durable, high-performance fabrics made for long-lasting furniture use.",
        },
        {
            src: "/images/our/img-4.png",
            name: "Workwear",
            content: "Strong, comfortable materials built to perform in demanding environments",
        },
    ]

    const OPTIONS: EmblaOptionsType = {
        align: 'start',
        dragFree: true
    }

    return (
        <Section className="bg-cream overflow-hidden py-16">
            {/* Header */}
            <div className="flex flex-col items-center text-center px-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-px bg-gold" />
                    <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                        Industries
                    </span>
                    <div className="w-7 h-px bg-gold" />
                </div>
                <h2 className="font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2">
                    Industries We <em className='not-italic text-fun-blue-500'>Serve</em>
                </h2>
                <p className="text-sub text-sm max-w-sm leading-tight">
                    Engineered for durability, comfort & export standards
                </p>
            </div>

            {/* Slider */}
            <SliderWrapper options={OPTIONS} className='gap-5'>

                {data.map((item, idx) => (
                    <Card
                        key={idx}
                        idx={idx}
                        className='relative rounded-xl overflow-hidden shrink-0 w-60 h-84 group cursor-pointer'
                    >
                        {/* Image */}
                        <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/35 to-transparent z-10" />

                        {/* Content */}
                        <div className='absolute bottom-0 left-0 right-0 z-20 p-5 md:p-6'>

                            <span className='inline-flex items-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/70 font-semibold mb-4'>
                                Industry
                            </span>

                            <h3 className='text-white font-medium leading-tight mb-1.5'>
                                {item.name}
                            </h3>

                            <p className='font-pop font-light text-zinc-300 text-xs leading-snug'>
                                {item.content}
                            </p>
                        </div>

                        {/* Hover icon */}
                        <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowRight
                                size={14}
                                className="text-fun-blue-950 -rotate-45"
                            />
                        </div>

                        {/* Border glow */}
                        <div className='absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-300 z-10' />
                    </Card>
                ))}

            </SliderWrapper>
        </Section>
    )
}