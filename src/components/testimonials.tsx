import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import ToolTip from './ui/tool_tip'
import { EmblaOptionsType } from 'embla-carousel'
import SliderWrapper from './slider_wrapper'
import Card from './card'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { data, testimonials } from '../constant/testimonials'

const OPTIONS: EmblaOptionsType = {
    align: 'start',
    dragFree: true,
}

export default function Testimonials() {


    return (
        <Section className='bg-cream overflow-hidden'>
            <Wrapper >

                <div className='grid lg:grid-cols-[430px_1fr] gap-14 items-center'>
                    <div className='flex flex-col items-start'>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-7 h-px bg-gold" />
                            <span className="font-mono text-[10px] font-semibold tracking-[0.16em] uppercase text-gold">
                                Testimonials
                            </span>
                            <div className="w-7 h-px bg-gold" />
                        </div>

                        <h2 className="font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2">
                            Trusted by Buyers <em className='text-gold text-fun-blue-500'>Worldwide</em>
                        </h2>

                        <p className="text-sub text-sm max-w-sm leading-tight">
                            Consistent quality and reliable delivery —
                            our long-term textile partner.
                        </p>

                        <ToolTip data={data} className='mt-10' />
                    </div>

                    {/* Slider */}
                    <div className='overflow-hidden'>

                        <SliderWrapper options={OPTIONS} className='gap-6 py-4'>
                            {testimonials.map((item, idx) => (
                                <Card
                                    key={item.name}
                                    idx={idx}
                                    className='relative w-88 md:w-[24rem] rounded-2xl overflow-hidden bg-white border border-black/5 p-7 shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.06)]'
                                >

                                    {/* Quote icon */}
                                    <div className='absolute top-5 right-5 w-10 h-10 rounded-full bg-fun-blue-50 flex items-center justify-center'>
                                        <Quote size={16} className='text-gold' />
                                    </div>

                                    {/* Content */}
                                    <p className='text-[15px] leading-relaxed text-sub pr-6 mb-8'>
                                        {item.content}
                                    </p>

                                    {/* User */}
                                    <div className='flex items-center gap-4 mt-auto'>

                                        <div className='size-14 rounded-full overflow-hidden ring-2 ring-fun-blue-100 shrink-0'>
                                            <Image
                                                src={item.img}
                                                width={100}
                                                height={100}
                                                alt={item.name}
                                                className='w-full h-full object-cover'
                                            />
                                        </div>

                                        <div>
                                            <span className='block text-lg font-semibold text-dark leading-tight'>
                                                {item.name}
                                            </span>

                                            <span className='block mt-1 text-sm text-[#7B8190]'>
                                                {item.location}
                                            </span>
                                        </div>

                                    </div>

                                </Card>
                            ))}

                        </SliderWrapper>

                    </div>
                </div>

            </Wrapper>
        </Section>
    )
}