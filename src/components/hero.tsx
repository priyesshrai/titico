"use client";
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { motion } from "motion/react";
import { useEffect, useRef, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/src/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Button from './ui/buttons';
import Image from 'next/image';

interface Banner {
    src: string;
    alt: string;
    title: string;
    content: string;
}


export default function Hero() {
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        onSelect();

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    const banner: Banner[] = [
        {
            src: "/images/banner/banner-1.png",
            alt: "Global Exporters of Premium Textile Solutions",
            title: "Global Exporters of Premium Textile Solutions",
            content: "Serving fashion brands, wholesalers, and manufacturers across 20+ countries",
        },
        {
            src: "/images/banner/banner-1.png",
            alt: "Global Exporters of Premium Textile Solutions",
            title: "Global Exporters of Premium Textile Solutions",
            content: "Serving fashion brands, wholesalers, and manufacturers across 20+ countries",
        },
        {
            src: "/images/banner/banner-1.png",
            alt: "Global Exporters of Premium Textile Solutions",
            title: "Global Exporters of Premium Textile Solutions",
            content: "Serving fashion brands, wholesalers, and manufacturers across 20+ countries",
        },
    ]
    const activeBanner = banner[activeIndex];
    return (
        <Section>
            <Wrapper className='lg:py-6 md:py-6 sm:py-6 py-6'>
                <div className='w-full relative grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-10'>
                    <div className='w-full h-full md:order-1 order-2'>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: false,
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.2
                            }}
                            className='w-full pr-10 flex flex-col justify-center h-full'>
                            <span className='block lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono text-dark font-bold leading-tight max-w-sm'>
                                {activeBanner.title}
                            </span>
                            <span className='block mt-3 text-[#202020] font-normal font-pop md:text-lg sm:text-base text-sm leading-tight max-w-sm'>
                                {activeBanner.content}
                            </span>
                            <div className='md:mt-9 mt-4 flex max-[460px]:flex-col max-[460px]:items-start flex-row items-center gap-4 md:pb-0 pb-5'>
                                <Button>
                                    Explore Our Collections
                                </Button>
                                <Button variant='outline' className='hover:bg-transparent'>
                                    Request a Quote
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                    <Carousel className="w-full z-10 md:order-2 order-1"
                        plugins={[plugin.current]}
                        opts={{
                            loop: true,
                        }}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {
                                banner.map((data, key) => (
                                    <CarouselItem key={key} className='relative'>
                                        <Image
                                            src={data.src}
                                            alt="Banner"
                                            className="w-full h-110 object-cover rounded-xl"
                                            width={1080}
                                            height={500}
                                        />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious
                            onClick={() => {
                                api?.scrollPrev();
                                plugin.current?.reset();
                            }}
                            className='border-none md:w-10 md:h-10 w-7 h-7 bg-dark text-white -left-5 text-3xl cursor-pointer hover:bg-zinc-800 rounded-lg'
                        />
                        <CarouselNext
                            onClick={() => {
                                api?.scrollNext();
                                plugin.current?.reset();
                            }}
                            className='border-none md:w-10 md:h-10 w-7 h-7 bg-dark text-white text-3xl -right-5 cursor-pointer hover:bg-zinc-800 rounded-lg'
                        />
                    </Carousel>
                </div>
            </Wrapper>
        </Section>
    )
}
