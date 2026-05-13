import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import { Heading } from './ui/headings'
import Button from './ui/buttons'
import { MoveUpRight } from 'lucide-react'

export default function CtaBanner() {
    return (
        <Section className='bg-cream overflow-hidden'>
            <Wrapper>

                <div className='relative overflow-hidden rounded-4xl lg:rounded-[2.5rem] min-h-128 flex items-center'>

                    {/* Background image */}
                    <Image
                        src={"/images/ads/banner.png"}
                        alt='Background'
                        fill
                        priority
                        className='object-cover object-center scale-[1.02]'
                    />

                    {/* Dark cinematic overlay */}
                    <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.88)_0%,rgba(8,10,15,0.68)_35%,rgba(8,10,15,0.25)_100%)]' />

                    {/* Ambient glow */}
                    <div className='absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-3xl' />

                    {/* Grid texture */}
                    <div
                        className='absolute inset-0 opacity-[0.04]'
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
                            `,
                            backgroundSize: '34px 34px',
                        }}
                    />

                    {/* Content */}
                    <div className='relative z-10 w-full px-6 md:px-10 lg:px-14 py-16'>

                        <div className='max-w-2xl'>

                            {/* Small label */}
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-8 h-px bg-white/40' />
                                <span className='text-[10px] tracking-[0.2em] uppercase font-semibold text-white/60'>
                                    Global Textile Export
                                </span>
                            </div>

                            {/* Heading */}
                            <Heading className='text-white leading-[1.02]'>
                                Textile Manufacturing
                                <br />
                                Built for the <em className='not-italic text-gold'>World</em>
                            </Heading>

                            {/* Description */}
                            <p className='max-w-xl text-white/70 mt-6 leading-relaxed font-pop text-sm md:text-[15px]'>
                                We are a vertically integrated textile export company delivering
                                high-quality fabrics to international brands, wholesalers, and
                                manufacturers. With modern machinery, skilled technicians, and
                                strict quality processes, we ensure every meter meets global standards.
                            </p>

                            {/* CTA buttons */}
                            <div className='mt-8 flex flex-wrap gap-4'>

                                <Button className='group flex items-center gap-3 px-6'>
                                    Shop Now

                                    <span className='w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                                        <MoveUpRight size={14} />
                                    </span>
                                </Button>

                                <Button
                                    variant='outline'
                                    className='group flex items-center gap-3 text-white border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-dark px-6'
                                >
                                    Contact Us

                                    <span className='w-7 h-7 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'>
                                        <MoveUpRight size={14} />
                                    </span>
                                </Button>

                            </div>
                        </div>
                    </div>

                    {/* Bottom fade */}
                    <div className='absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/30 to-transparent' />

                    {/* Border */}
                    <div className='absolute inset-0 rounded-4xl lg:rounded-[2.5rem] border border-white/10 pointer-events-none' />

                </div>

            </Wrapper>
        </Section>
    )
}