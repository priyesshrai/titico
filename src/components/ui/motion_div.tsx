'use client'
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string;
    idx: number;
}

export default function AnimatedDiv({ children, className, idx }: Props) {
    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}
