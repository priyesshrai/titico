"use client";

import {
    Mail,
    Phone,
    User,
    Building2,
    MessageSquare,
    X,
    ArrowRight,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function ContactUs({ open, onClose }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4 md:p-7 overflow-y-auto"
                    data-lenis-prevent
                >
                    <div className="min-h-full flex items-center justify-center">
                        <motion.div
                            ref={containerRef}
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-[#151311] shadow-2xl"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,163,90,0.15),transparent_35%)]" />

                            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                                {/* Left Content */}
                                <div className="relative hidden lg:flex flex-col justify-between border-r border-white/10 p-10">

                                    <div>
                                        {/* Logo */}
                                        <div className="flex items-center gap-3">
                                            <div className="size-12 rounded-xl bg-gold flex items-center justify-center">
                                                <span className="text-dark text-2xl font-play">
                                                    T
                                                </span>
                                            </div>

                                            <div>
                                                <h2 className="text-white text-2xl leading-none">
                                                    Titico
                                                </h2>

                                                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                                                    Textiles · Varanasi
                                                </p>
                                            </div>
                                        </div>

                                        {/* Heading */}
                                        <div className="mt-16">
                                            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                                                Global Fabric Manufacturing
                                            </p>

                                            <h3 className="mt-4 text-4xl leading-tight text-white">
                                                Let’s Build Your
                                                <span className="text-gold">
                                                    {" "}Next Collection
                                                </span>
                                            </h3>

                                            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                                                Get fabric quotations, discuss custom
                                                manufacturing, request swatches, or connect
                                                directly with our export specialists.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "500+ Fabric SKUs",
                                            "20+ Export Countries",
                                            "Custom Development",
                                            "Fast Quote Response",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-2xl border border-white/10 bg-white/2 px-4 py-4"
                                            >
                                                <div className="h-1 w-8 bg-gold rounded-full mb-3"></div>

                                                <p className="text-sm text-zinc-300">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Form */}
                                <div className="relative p-6 sm:p-8 lg:p-10">

                                    {/* Close */}
                                    <button
                                        type="button"
                                        aria-label="Close Modal"
                                        onClick={onClose}
                                        className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
                                    >
                                        <X size={18} />
                                    </button>

                                    {/* Mobile Logo */}
                                    <div className="mb-8 flex items-center gap-3 lg:hidden">
                                        <div className="size-10 rounded-xl bg-gold flex items-center justify-center">
                                            <span className="text-dark text-xl font-play">
                                                T
                                            </span>
                                        </div>

                                        <div>
                                            <h2 className="text-white text-xl">
                                                Titico
                                            </h2>

                                            <p className="text-[9px] uppercase tracking-[0.2em] text-gold">
                                                Textiles · Varanasi
                                            </p>
                                        </div>
                                    </div>

                                    {/* Form Header */}
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
                                            Contact Us
                                        </p>

                                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                                            Fill in your requirements and our team will
                                            reach out within 24–48 hours.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form className="mt-8 space-y-5">

                                        <div className="grid sm:grid-cols-2 gap-5">

                                            {/* Name */}
                                            <div>
                                                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">
                                                    Full Name
                                                </label>

                                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 h-14 transition-all duration-300 focus-within:border-gold">
                                                    <User size={18} className="text-gold" />

                                                    <input
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company */}
                                            <div>
                                                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">
                                                    Company
                                                </label>

                                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 h-14 transition-all duration-300 focus-within:border-gold">
                                                    <Building2 size={18} className="text-gold" />

                                                    <input
                                                        type="text"
                                                        placeholder="Your company"
                                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">

                                            {/* Email */}
                                            <div>
                                                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">
                                                    Email Address
                                                </label>

                                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 h-14 transition-all duration-300 focus-within:border-gold">
                                                    <Mail size={18} className="text-gold" />

                                                    <input
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">
                                                    Phone Number
                                                </label>

                                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 h-14 transition-all duration-300 focus-within:border-gold">
                                                    <Phone size={18} className="text-gold" />

                                                    <input
                                                        type="text"
                                                        placeholder="+91 9876543210"
                                                        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">
                                                Your Requirements
                                            </label>

                                            <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-4 transition-all duration-300 focus-within:border-gold">
                                                <MessageSquare
                                                    size={18}
                                                    className="mt-1 text-gold"
                                                />

                                                <textarea
                                                    rows={5}
                                                    placeholder="Tell us about fabric type, GSM, quantity, export destination, or customization requirements..."
                                                    className="w-full resize-none bg-transparent text-sm leading-7 text-white outline-none placeholder:text-zinc-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button
                                            type="submit"
                                            className="group mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gold px-6 text-sm font-semibold text-dark transition-all duration-300 hover:scale-[1.01] hover:bg-[#d6b06c]"
                                        >
                                            Submit Inquiry

                                            <ArrowRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}