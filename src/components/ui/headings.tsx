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
            className={cn("md:font-extrabold font-semibold lg:text-5xl md:text-4xl text-2xl text-dark font-yeseva", className)}
            {...rest}
        >
            {children}
        </h1>
    )
}

export function Heading({ children, className, ...rest }: Props1) {
    return (
        <h2
            className={cn("font-play text-dark text-3xl lg:text-4xl font-medium leading-tight mb-2", className)}
            {...rest}
        >
            {children}
        </h2>
    )
}

export function SubHeading({ children, className, ...rest }: Props2) {
    return (
        <span
            className={cn("inline-block font-medium md:text-lg text-base text-sub font-play leading-tight", className)}
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
