import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react';

type Props = ComponentProps<"button"> & {
    children: ReactNode
    className?: string
    variant?: "default" | "outline";
}
export default function Button({ children, className, variant = "default", ...rest }: Props) {
    return (
        <button
            className={cn(
                "font-pop font-medium text-base transition-colors duration-300 ease-in-out px-4 py-3 rounded-md cursor-pointer",
                variant === "default" && "bg-dark text-white hover:bg-zinc-900",
                variant === "outline" && "border border-dark text-dark hover:bg-dark",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}
