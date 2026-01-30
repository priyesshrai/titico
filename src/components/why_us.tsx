import React from 'react'
import Section from './ui/section';
import Wrapper from './ui/wrapper';
import { Content, Heading, SubHeading } from './ui/headings';
import AnimatedDiv from './ui/motion_div';
import Image from 'next/image';

interface Data {
    label: string;
    content: string;
    icon: string;
}

export default function WhyUs() {
    const data: Data[] = [
        {
            label: "In-House Manufacturing",
            content: "Full control from yarn sourcing to fabric finishing, ensuring consistency, speed, and quality at every stage.",
            icon: "/images/icons/why-icon-1.svg"
        },
        {
            label: "Strict Quality Control",
            content: "Every production batch is tested for strength, color fastness, and performance before it leaves our facility.",
            icon: "/images/icons/why-icon-2.svg"
        },
        {
            label: "Custom Development",
            content: "We match your exact shade, texture, GSM, and finish to meet your brand or market requirements.",
            icon: "/images/icons/why-icon-3.svg"
        },
        {
            label: "Global Shipping",
            content: "Trusted logistics partners help us deliver fabrics safely and on time to buyers in over 20 countries worldwide.",
            icon: "/images/icons/why-icon-4.svg"
        },
        {
            label: "Compliance Ready",
            content: "Our fabrics are supported by OEKO-TEX, ISO, and REACH standards, making them ready for international markets.",
            icon: "/images/icons/why-icon-5.svg"
        },
        {
            label: "Reliable Lead Times",
            content: "We follow strict production schedules and export timelines, so you can plan your collections with confidence and zero delays.",
            icon: "/images/icons/why-icon-6.svg"
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2 lg:gap-4 md:gap-3 items-center'>
                    <Heading>
                        Why Global Buyers Choose Us
                    </Heading>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                    {
                        data.map((item, idx) => (
                            <AnimatedDiv
                                className='p-4 relative w-full h-full flex flex-col lg:gap-8 md:gap-6 gap-4'
                                idx={idx}
                                key={item.label}
                            >
                                <div>
                                    <Image src={item.icon} alt={item.label} width={64} height={64} className=' md:w-16 w-10 h-auto' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-mono text-base lg:text-2xl md:text-lg text-dark font-medium'>
                                        {item.label}
                                    </span>
                                    <p className='text-sm text-sub max-w-xs w-full '>
                                        {item.content}
                                    </p>
                                </div>
                                <div className='absolute h-full w-px right-px bg-linear-to-b from-transparent via-[#29A9D8] to-transparent ' />
                            </AnimatedDiv>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
