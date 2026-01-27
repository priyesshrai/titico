import { cn } from "@/src/lib/utils"
import { ComponentProps, ReactNode } from "react"

export interface Props {
    children: ReactNode
    className?: string
}
export default function Section({ children, className, ...rest }: Props): ComponentProps<"section"> {
    return (
        <section
            className={cn("w-full", className)}
            {...rest}
        >
            {children}
        </section>
    )
}

