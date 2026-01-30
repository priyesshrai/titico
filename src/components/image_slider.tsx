import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { EmblaOptionsType } from 'embla-carousel'
import SliderWrapper from './slider_wrapper'
import Image from 'next/image'

export default function ImageSlider() {
    const images: string[] = [
        "/images/slider/banner-slider-1.png",
        "/images/slider/banner-slider-2.png",
        "/images/slider/banner-slider-3.png",
    ]
    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: true }
    return (
        <Section>
            <Wrapper>
                <SliderWrapper options={OPTIONS} className='gap-5 mx-0'>
                    {
                        images.map((src, idx) => (
                            <div key={idx}
                                className={`relative rounded-3xl lg:w-167 md:w-130 w-90 lg:h-120 md:h-90 h-72 border border-gray-200 overflow-hidden`}
                            >
                                <Image
                                    src={src}
                                    alt={"Product Images"}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        ))
                    }
                </SliderWrapper>
            </Wrapper>
        </Section>
    )
}
