'use client';
import { useState } from "react";
import { Heading, SubHeading } from "./ui/headings";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface Collection {
    name: string;
    image: string;
    title: string;
    content: string;
}

export default function Collections() {
    const data: Collection[] = [
        {
            name: "Cotton Fabrics",
            image: "/images/collections/img-1.png",
            title: "Office ipsum you must be muted.",
            content: "Office ipsum you must be muted. Strategic flesh fruit tiger goto going. Overflow window involved both resources first world impact. Mint enable good initiative nobody call lift moving weeks. Point flesh after expectations at like accountable attached. Your by feed us hits revision floor ourselves. Dear where believe meeting reach world pulling closing vec. Chime calculator will launch buy-in dear quarter. Digital calculator anomalies criticality unlock. Good live world like ground ideal roll. Hanging book territories enable needed nor weeks idea. Hit requirements guys across panel every commitment go what. Stand cause people keep please. T-shaped low win-win-win conversation discussions keep important. Up container looking bake decisions today me hiring."
        },
        {
            name: "Knitted Fabrics",
            image: "/images/collections/img-1.png",
            title: "Office ipsum you must be muted.",
            content: "Office ipsum you must be muted. Strategic flesh fruit tiger goto going. Overflow window involved both resources first world impact. Mint enable good initiative nobody call lift moving weeks. Point flesh after expectations at like accountable attached. Your by feed us hits revision floor ourselves. Dear where believe meeting reach world pulling closing vec. Chime calculator will launch buy-in dear quarter. Digital calculator anomalies criticality unlock. Good live world like ground ideal roll. Hanging book territories enable needed nor weeks idea. Hit requirements guys across panel every commitment go what. Stand cause people keep please. T-shaped low win-win-win conversation discussions keep important. Up container looking bake decisions today me hiring."
        },
        {
            name: "Woven Fabrics",
            image: "/images/collections/img-1.png",
            title: "Office ipsum you must be muted.",
            content: "Office ipsum you must be muted. Strategic flesh fruit tiger goto going. Overflow window involved both resources first world impact. Mint enable good initiative nobody call lift moving weeks. Point flesh after expectations at like accountable attached. Your by feed us hits revision floor ourselves. Dear where believe meeting reach world pulling closing vec. Chime calculator will launch buy-in dear quarter. Digital calculator anomalies criticality unlock. Good live world like ground ideal roll. Hanging book territories enable needed nor weeks idea. Hit requirements guys across panel every commitment go what. Stand cause people keep please. T-shaped low win-win-win conversation discussions keep important. Up container looking bake decisions today me hiring."
        },
        {
            name: "Blended Fabrics",
            image: "/images/collections/img-1.png",
            title: "Office ipsum you must be muted.",
            content: "Office ipsum you must be muted. Strategic flesh fruit tiger goto going. Overflow window involved both resources first world impact. Mint enable good initiative nobody call lift moving weeks. Point flesh after expectations at like accountable attached. Your by feed us hits revision floor ourselves. Dear where believe meeting reach world pulling closing vec. Chime calculator will launch buy-in dear quarter. Digital calculator anomalies criticality unlock. Good live world like ground ideal roll. Hanging book territories enable needed nor weeks idea. Hit requirements guys across panel every commitment go what. Stand cause people keep please. T-shaped low win-win-win conversation discussions keep important. Up container looking bake decisions today me hiring."
        },
        {
            name: "Technical Textiles",
            image: "/images/collections/img-1.png",
            title: "Office ipsum you must be muted.",
            content: "Office ipsum you must be muted. Strategic flesh fruit tiger goto going. Overflow window involved both resources first world impact. Mint enable good initiative nobody call lift moving weeks. Point flesh after expectations at like accountable attached. Your by feed us hits revision floor ourselves. Dear where believe meeting reach world pulling closing vec. Chime calculator will launch buy-in dear quarter. Digital calculator anomalies criticality unlock. Good live world like ground ideal roll. Hanging book territories enable needed nor weeks idea. Hit requirements guys across panel every commitment go what. Stand cause people keep please. T-shaped low win-win-win conversation discussions keep important. Up container looking bake decisions today me hiring."
        },
    ]
    const [activeTab, setActiveTab] = useState<number>(0)
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2 lg:gap-4 md:gap-3 items-center'>
                    <Heading>
                        Our Fabric Collections
                    </Heading>
                    <SubHeading className='max-w-sm text-center'>
                        Crafted to meet the needs of global fashion, home textiles, and industrial markets
                    </SubHeading>
                </div>
                <motion.div
                    className='overflow-hidden relative w-full grid lg:grid-cols-[300px_1fr] md:grid-cols-[250px_1fr grid-cols-1 lg:gap-5 gap-3'
                    initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-full md:h-full">
                        <div className="relative w-full h-full flex md:flex-col md:gap-0 gap-2.5 overflow-x-scroll ac">
                            {data.map((tabs, idx) => (
                                <div
                                    onClick={() => setActiveTab(idx ?? 0)}
                                    className={`w-max shrink-0 overflow-hidden relative md:w-full md:px-4 md:py-3.5 md:text-lg text-sm md:font-semibold font-mono cursor-pointer transition-all duration-200 ease-linear ${idx === activeTab ? "text-white md:after:w-full md:after:bg-gradient-to-r md:after:from-dark md:after:to-white after:bg-dark" : "text-sub hover:bg-gray-100 after:w-0"} after:content-[''] after:absolute after:inset-0 after:h-full after:transition-all after:duration-300 after:z-[-1] px-3 py-1.5 md:rounded-none rounded-full md:border-none border border-neutral-100`}
                                    key={idx}
                                >
                                    {tabs.name}
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="relative w-full h-full ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                className="relative w-full h-full lg:grid lg:grid-cols-[300px_1fr] md:block gap-5"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1],
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -50,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.4, 0, 0.2, 1],
                                    },
                                }}
                            >
                                <div className="w-full block">
                                    <Image
                                        src={data[activeTab].image}
                                        width={400}
                                        height={320}
                                        alt={data[activeTab].title}
                                        className="w-full lg:h-[320px] md:h-[230px] h-[280px] object-cover object-center rounded-lg"
                                    />
                                </div>

                                <div className="w-full h-fit pl-4">
                                    <h3 className="lg:text-2xl text-xl text-dark font-medium font-mono antialiased">
                                        {data[activeTab].title}
                                    </h3>

                                    <p className="w-full lg:mt-3 mt-2 text-base font-normal text-sub font-pop">
                                        {data[activeTab].content}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </Wrapper>
        </Section>
    )
}
