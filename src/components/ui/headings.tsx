import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<"h1"> & {
    children: ReactNode
    className?: string
}
type Props1 = ComponentProps<"h2"> & {
    children: ReactNode
    className?: string
}
type Props2 = ComponentProps<"span"> & {
    children: ReactNode
    className?: string
}
type Props3 = ComponentProps<"p"> & {
    children: ReactNode
    className?: string
}

export function PageHeading({ children, className, ...rest }: Props) {
    return (
        <h1
            className={cn("md:font-extrabold font-semibold lg:text-5xl md:text-4xl sm:text-2xl text-xl text-dark ", className)}
            {...rest}
        >
            {children}
        </h1>
    )
}

export function Heading({ children, className, ...rest }: Props1) {
    return (
        <h2
            className={cn("md:font-bold font-semibold lg:text-4xl md:text-3xl sm:text-xl text-lg text-dark ", className)}
            {...rest}
        >
            {children}
        </h2>
    )
}

export function SubHeading({ children, className, ...rest }: Props2) {
    return (
        <span
            className={cn("inline-block font-medium md:text-base text-sm text-[#6E6E6E] font-pop", className)}
            {...rest}
        >
            {children}
        </span>
    )
}

export function Content({ children, className, ...rest }: Props3) {
    return (
        <p
            className={cn("inline-block font-medium lg:text-xl md:text-base text-sm text-[#5B5B5B] font-pop", className)}
            {...rest}
        >
            {children}
        </p>
    )
}
