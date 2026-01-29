"use client";
import { motion } from 'motion/react'
import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface Props {
    children: ReactNode
    idx: number,
    className?: string;
}
export default function Card({ children, idx, className }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
