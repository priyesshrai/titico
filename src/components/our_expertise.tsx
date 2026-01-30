import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import Card from './card'
import SliderWrapper from './slider_wrapper'

interface Data {
    src: string;
    name: string,
    content?: string;
    rating?: number;
    link?: string;
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
    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: true }
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2 lg:gap-4 md:gap-3 items-center'>
                    <Heading>
                        Industries We Serve
                    </Heading>
                    <SubHeading className='max-w-sm text-center'>
                        Engineered for durability, comfort & export standards
                    </SubHeading>
                </div>
                <div className=''>
                    <SliderWrapper options={OPTIONS} className='gap-5'>
                        {
                            data.map((data, idx) => (
                                <Card idx={idx}
                                    className={`relative rounded-3xl w-85 h-95 border border-gray-200 overflow-hidden`}
                                >
                                    <Image
                                        src={data.src}
                                        alt={data.name}
                                        fill
                                        className="object-cover object-center"
                                    />
                                    <div className='absolute w-full bottom-0 bg-linear-to-t from-gray-100/10 to-gray-100/0 backdrop-blur-sm p-4 z-10 left-0 flex flex-col gap-2.5'>
                                        <span className='text-xl font-semibold font-mono text-white'>
                                            {data.name}
                                        </span>
                                        <span className='max-w-60 leading-tight font-pop text-white text-sm text-thin'>
                                            {data.content}
                                        </span>
                                    </div>
                                </Card>
                            ))
                        }
                    </SliderWrapper>
                </div>
            </Wrapper>
        </Section>
    )
}
