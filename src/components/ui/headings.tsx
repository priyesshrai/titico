import { ComponentProps } from 'react'
import { Props } from './section'
import { cn } from '@/src/lib/utils'

export function PageHeading({ children, className, ...rest }: Props): ComponentProps<"h1"> {
    return (
        <h1
            className={cn("md:font-extrabold font-semibold lg:text-5xl md:text-4xl sm:text-2xl text-xl text-[#282828] ", className)}
            {...rest}
        >
            {children}
        </h1>
    )
}

export function Heading({ children, className, ...rest }: Props): ComponentProps<"h2"> {
    return (
        <h2
            className={cn("md:font-bold font-semibold lg:text-4xl md:text-3xl sm:text-xl text-lg text-[#282828] ", className)}
            {...rest}
        >
            {children}
        </h2>
    )
}

export function SubHeading({ children, className, ...rest }: Props): ComponentProps<"span"> {
    return (
        <span
            className={cn("inline-block font-medium md:text-base text-sm text-[#6E6E6E] font-pop", className)}
            {...rest}
        >
            {children}
        </span>
    )
}

export function Content({ children, className, ...rest }: Props): ComponentProps<"p"> {
    return (
        <p
            className={cn("inline-block font-medium lg:text-xl md:text-base text-sm text-[#5B5B5B] font-pop", className)}
            {...rest}
        >
            {children}
        </p>
    )
}
