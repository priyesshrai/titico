import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import { Heading } from './ui/headings'
import Button from './ui/buttons'
import { ArrowRight, Mail, PhoneCall } from 'lucide-react'

export default function ContactBanner() {
    return (
        <Section className='py-20'>
            <Wrapper>
                <div className='relative overflow-hidden rounded-4xl border border-white/10 bg-dark'>

                    {/* Background Glow */}
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,163,90,0.18),transparent_35%)]'></div>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]'></div>

                    {/* Decorative Images */}
                    <div className='absolute bottom-0 left-0 opacity-20'>
                        <Image
                            src={"/images/icons/img-1.svg"}
                            alt='Image'
                            width={180}
                            height={180}
                            className='lg:w-44 md:w-32 w-20 h-auto'
                        />
                    </div>

                    <div className='absolute top-0 right-0 opacity-20 rotate-180'>
                        <Image
                            src={"/images/icons/img-2.svg"}
                            alt='Image'
                            width={180}
                            height={180}
                            className='lg:w-44 md:w-32 w-20 h-auto'
                        />
                    </div>

                    {/* Content */}
                    <div className='relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center'>

                        {/* Tag */}
                        <div className='mb-5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2'>
                            <span className='text-xs uppercase tracking-[0.25em] text-gold font-mono'>
                                Global Textile Manufacturing
                            </span>
                        </div>

                        {/* Heading */}
                        <Heading className='max-w-3xl text-white leading-tight'>
                            Ready to Source Premium Fabrics
                            <span className='text-gold'> with Confidence?</span>
                        </Heading>

                        {/* Description */}
                        <p className='mt-5 max-w-2xl text-sm sm:text-base leading-7 text-zinc-400 font-pop'>
                            From yarn sourcing to finished fabrics, our export team helps brands,
                            wholesalers, and manufacturers with reliable production, custom
                            development, and worldwide shipping support.
                        </p>

                        {/* Stats */}
                        <div className='mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl border-y border-white/10 py-6'>
                            <div>
                                <h3 className='text-2xl text-white font-play'>20+</h3>
                                <p className='text-xs text-zinc-500 mt-1 uppercase tracking-wider'>
                                    Export Countries
                                </p>
                            </div>

                            <div>
                                <h3 className='text-2xl text-white font-play'>500+</h3>
                                <p className='text-xs text-zinc-500 mt-1 uppercase tracking-wider'>
                                    Fabric SKUs
                                </p>
                            </div>

                            <div>
                                <h3 className='text-2xl text-white font-play'>45+</h3>
                                <p className='text-xs text-zinc-500 mt-1 uppercase tracking-wider'>
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className='text-2xl text-white font-play'>48h</h3>
                                <p className='text-xs text-zinc-500 mt-1 uppercase tracking-wider'>
                                    Quote Response
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='mt-10 flex flex-col sm:flex-row items-center gap-4'>
                            <Button className='group flex items-center gap-3 bg-gold text-dark hover:bg-[#d8b06a] px-7 py-6 rounded-full'>
                                <Mail size={18} />
                                Request a Quote
                                <ArrowRight
                                    size={16}
                                    className='transition-transform duration-300 group-hover:translate-x-1'
                                />
                            </Button>

                            <Button
                                variant='outline'
                                className='flex items-center gap-3 border border-white/20 bg-transparent text-white hover:bg-white hover:text-dark px-7 py-6 rounded-full'
                            >
                                <PhoneCall size={18} />
                                Contact Export Team
                            </Button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}