"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, Children } from "react";
import { cn } from "../lib/utils";

type PropType = {
    children: ReactNode;
    options?: EmblaOptionsType;
    className?: string;
};

export default function SliderWrapper({ children, options, className }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    return (
        <section className="embla overflow-hidden">
            <div className="embla__viewport" ref={emblaRef}>
                <div className={cn("embla__container flex mx-10", className)}>
                    {Children.map(children, (child, index) => (
                        <div className="embla__slide shrink-0" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
