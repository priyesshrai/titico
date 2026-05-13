"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, Children, useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { EmblaCarouselType } from 'embla-carousel'

type PropType = {
    children: ReactNode;
    options?: EmblaOptionsType;
    className?: string;
};

export default function SliderWrapper({ children, options, className }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
    return (
        <section className="embla overflow-hidden relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className={cn("embla__container flex md:mx-10 mx-4", className)}>
                    {Children.map(children, (child, index) => (
                        <div className="embla__slide shrink-0" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-lg bg-gold text-white flex items-center justify-center hover:bg-gold/90 cursor-pointer disabled:bg-gold/40 disabled:cursor-not-allowed"
            >
                <MoveLeft size={13} />
            </button>

            <button
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-lg bg-gold text-white flex items-center justify-center hover:bg-gold/90 cursor-pointer disabled:bg-gold/40 disabled:cursor-not-allowed"
            >
                <MoveRight size={13} />
            </button>
        </section>
    );
}

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}