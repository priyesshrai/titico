import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { PageHeading, SubHeading } from './ui/headings'
import SliderWrapper from './slider_wrapper';
import { EmblaOptionsType } from 'embla-carousel';
import Card from './card';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

interface Data {
    src: string;
    name: string,
    content?: string;
    rating?: number;
    link?: string;
}
export default function CardSlider() {
    const data: Data[] = [
        {
            src: "/images/slider/slider-1.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4.5,
        },
        {
            src: "/images/slider/slider-2.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-3.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-4.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-3.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-4.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-3.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
        {
            src: "/images/slider/slider-4.png",
            name: "Cotton Fabrics",
            content: "Available in multiple GSM, weaves & finishes",
            rating: 4,
        },
    ]
    const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }
    return (
        <Section className='p-0'>
            <Wrapper className='max-w-full'>
                <div className='w-full flex flex-col gap-2 lg:gap-4 md:gap-3 items-center'>
                    <PageHeading>
                        Top Exported Fabrics
                    </PageHeading>
                    <SubHeading className='max-w-sm text-center'>
                        Our most demanded materials trusted by buyers worldwide
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
                                        {
                                            data.rating &&
                                            <div className='mt-2 flex items-center justify-between'>
                                                <span className='flex items-center gap-0.5'>
                                                    {(() => {
                                                        const rating = data.rating;
                                                        const fullStars = Math.floor(rating);
                                                        const decimal = rating - fullStars;
                                                        const showHalf = decimal >= 0.25;

                                                        return (
                                                            <>
                                                                {Array.from({ length: fullStars }).map((_, idx) => (
                                                                    <Star
                                                                        key={`full-${idx}`}
                                                                        size={14}
                                                                        fill="yellow"
                                                                        stroke="none"
                                                                    />
                                                                ))}

                                                                {showHalf && <StarHalf size={14} fill="yellow" stroke="none" />}
                                                            </>
                                                        );
                                                    })()}
                                                </span>
                                                <span className='text-white text-sm font-pop'>
                                                    {data.rating}
                                                </span>
                                            </div>
                                        }
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
