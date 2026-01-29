import { cn } from "@/src/lib/utils"
import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<"section"> & {
    children: ReactNode
    className?: string
}
export default function Section({ children, className, ...rest }: Props) {
    return (
        <section
            className={cn("w-full px-6", className)}
            {...rest}
        >
            {children}
        </section>
    )
}

