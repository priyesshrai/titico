import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import AnimatedDiv from './ui/motion_div'
import Image from 'next/image'

export default function Certificate() {
    const images: string[] = [
        "/images/certificates/img-1.png",
        "/images/certificates/img-2.png",
        "/images/certificates/img-3.png",
        "/images/certificates/img-4.png",
        "/images/certificates/img-5.png",
        "/images/certificates/img-6.png",
        "/images/certificates/img-7.png",
    ]

    return (
        <Section className='bg-cream overflow-hidden'>
            <Wrapper>

                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                            Certifications
                        </span>
                        <div className="w-7 h-px bg-gold" />
                    </div>
                    <h2 className="font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2">
                        Certified for <em className='text-gold'>Global Trade</em>
                    </h2>
                    <p className="text-sub text-sm max-w-sm leading-tight">
                        International standards, trusted manufacturing processes,
                        and globally recognized textile certifications.
                    </p>
                </div>

                {/* Logo grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5'>

                    {images.map((src, idx) => (
                        <AnimatedDiv
                            idx={idx}
                            key={idx}
                            className='group'
                        >
                            <div className='relative overflow-hidden rounded-3xl bg-white border border-black/5 h-32 lg:h-36 flex items-center justify-center px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]'>

                                {/* glow */}
                                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-fun-blue-50 via-transparent to-fun-blue-100' />

                                <Image
                                    src={src}
                                    alt='Certificate'
                                    width={180}
                                    height={100}
                                    className='relative z-10 w-auto h-12 md:h-14 lg:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500'
                                />
                            </div>
                        </AnimatedDiv>
                    ))}

                </div>

            </Wrapper>
        </Section>
    )
}