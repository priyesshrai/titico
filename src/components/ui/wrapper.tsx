import { ComponentProps, ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

type Props = ComponentProps<"div"> & {
    children: ReactNode
    className?: string
}
export default function Wrapper({ children, className, ...rest }: Props) {
    return (
        <div
            className={cn("w-full max-w-7xl relative mx-auto px-6 lg:px-0 flex flex-col lg:gap-14 md:gap-10 gap-8", className)}
            {...rest}
        >
            {children}
        </div>
    )
}
