import React, { ComponentProps } from 'react'
import { Props } from './section'
import { cn } from '@/src/lib/utils'

export default function Wrapper({ children, className, ...rest }: Props): ComponentProps<"div"> {
    return (
        <div
            className={cn("w-full max-w-7xl relative mx-auto px-6 lg:px-0 flex flex-col lg:gap-14 md:gap-10 gap-8", className)}
            {...rest}
        >
            {children}
        </div>
    )
}
