import Image from 'next/image';
import AnimatedDiv from './ui/motion_div';
import Section from './ui/section'
import Wrapper from './ui/wrapper'

interface Details {
    icon: string;
    label: string;
    content: string;
}
export default function AdditionalDetails() {
    const details: Details[] = [
        {
            icon: "/images/icons/icon-1.svg",
            label: "WASHABLE",
            content: "Engineered to stay fresh, wash after wash."
        },
        {
            icon: "/images/icons/icon-2.svg",
            label: "AFFORDABLE",
            content: "Premium fabrics priced for everyday business."
        },
        {
            icon: "/images/icons/icon-3.svg",
            label: "COMFORTABLE",
            content: "Soft on skin, easy on every movement."
        },
        {
            icon: "/images/icons/icon-4.svg",
            label: "QUALITY MATERIAL",
            content: "Crafted from fibers that last, not fade."
        },
    ]
    return (
        <Section className='bg-[#F3F4F6]'>
            <Wrapper>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                    {
                        details.map((item, id) => (
                            <AnimatedDiv
                                key={item.label}
                                idx={id}
                                className='w-full h-full md:p-8 p-4 flex items-center justify-center flex-col'
                            >
                                <Image src={item.icon} alt={item.label} width={56} height={56} className='lg:w-20 md:w-16 w-12 h-auto ' />
                                <h4 className='text-lg md:text-xl font-pop font-medium text-dark mt-4'>
                                    {item.label}
                                </h4>
                                <span className='text-sm font-pop text-center block mt-2 text-sub'>
                                    {item.content}
                                </span>
                            </AnimatedDiv>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
