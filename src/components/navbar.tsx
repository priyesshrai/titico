"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PhoneCall, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { menu } from "../constant/menu";
gsap.registerPlugin(useGSAP);

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const currentPath = usePathname();
    const [hoverMenu, setHoverMenu] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const topLine = useRef<HTMLSpanElement>(null);
    const bottomLine = useRef<HTMLSpanElement>(null);
    const mobMenu = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 45);
    });

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current
            .to([topLine.current, bottomLine.current], {
                position: "absolute", top: "50%", left: "50%",
                xPercent: -50, yPercent: -50,
                transformOrigin: "center", duration: 0.3, ease: "power3.out",
            })
            .to(topLine.current, { rotate: 45, duration: 0.3, ease: "power3.out" }, "x")
            .to(bottomLine.current, { rotate: -45, duration: 0.3, ease: "power3.out" }, "x")
            .to(mobMenu.current, { x: 0, duration: 0.45, ease: "power4.out" }, 0.2);
    }, []);

    const handleMenuToggle = () => {
        open ? tl.current?.reverse() : tl.current?.play();
        setOpen(!open);
    };

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024 && open) handleMenuToggle(); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [open]);

    return (
        <>
            {/* ── Desktop header ── */}
            <motion.header
                className="w-full sticky top-0 z-30 px-6"
                initial={false}
                animate={{
                    backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
                    backgroundColor: scrolled ? "rgba(249,246,241,0.88)" : "rgba(249,246,241,0)",
                    borderBottomColor: scrolled ? "rgba(28,26,23,0.1)" : "rgba(28,26,23,0)",
                }}
                transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
                style={{ borderBottom: "1px solid" }}
            >
                <nav className={`w-full max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ease-in-out ${scrolled ? "h-16" : "h-22"}`}>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <Image
                            src={"/images/logo/logo.png"}
                            width={150}
                            height={64}
                            alt="Titico Textiles"
                            className={`${scrolled ? "w-12" : "w-16"} h-auto transition-all duration-300 ease-in-out`}
                        />
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {menu.map((item) => {
                            const isActive = currentPath === item.path || currentPath.startsWith(`${item.path}/`);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.path}
                                    className="relative px-2.5 py-2 rounded cursor-pointer group"
                                    onMouseEnter={() => setHoverMenu(item.label)}
                                    onMouseLeave={() => setHoverMenu(null)}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {/* Hover bg pill */}
                                    <AnimatePresence>
                                        {hoverMenu === item.label && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-dark/5 rounded"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "tween", duration: 0.2 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <span className={`relative z-10 block text-lg font-semibold leading-tight transition-colors duration-200 ${isActive ? "text-gold" : "text-dark group-hover:text-gold"}`}>
                                        {item.label}
                                    </span>
                                    {!scrolled && (
                                        <span className={`relative z-10 block text-xs leading-tight transition-colors duration-200 ${isActive ? "text-gold" : "text-slate-600"}`}>
                                            {item.description}
                                        </span>
                                    )}

                                    {/* Active underline */}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-gold" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden relative w-9 h-9 bg-dark rounded flex flex-col items-center justify-center gap-1.5 z-50 shrink-0"
                        onClick={handleMenuToggle}
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        <span ref={topLine} className="w-4 h-px bg-cream inline-block" />
                        <span ref={bottomLine} className="w-3 h-px bg-cream inline-block self-end mr-1" />
                    </button>
                </nav>
            </motion.header>

            {/* ── Mobile drawer ── */}
            <div
                ref={mobMenu}
                className="fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-dark z-40 -translate-x-full flex flex-col"
                data-lenis-prevent
            >
                {/* Drawer header */}
                <div className="p-6 border-b border-white/8">
                    <div className="font-yeseva text-[#f0ede8] text-lg leading-tight">Titico Textiles</div>
                    <div className="font-mono text-[9px] font-semibold tracking-[0.14em] uppercase text-gold mt-1">Varanasi · Est. 1978</div>
                </div>

                {/* Drawer links */}
                <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-0.5">
                    {menu.map((item) => {
                        const isActive = currentPath === item.path || currentPath.startsWith(`${item.path}/`);
                        return (
                            <Link
                                key={item.label}
                                href={item.path}
                                onClick={handleMenuToggle}
                                className={`flex items-center justify-between px-3 py-3 rounded transition-all duration-150 ${isActive
                                    ? "bg-gold/15 border-l-2 border-gold"
                                    : "hover:bg-white/5 border-l-2 border-transparent"
                                    }`}
                            >
                                <div>
                                    <div className={`font-yeseva text-sm ${isActive ? "text-gold" : "text-[#f0ede8]"}`}>
                                        {item.label}
                                    </div>
                                    <div className="font-pop text-[9px] font-light text-[#666] mt-0.5">
                                        {item.description}
                                    </div>
                                </div>
                                <MoveUpRight size={13} className={isActive ? "text-gold" : "text-[#444]"} />
                            </Link>
                        );
                    })}
                </nav>

                {/* Drawer footer CTA */}
                <div className="p-4 border-t border-white/8">
                    <Link
                        href="/#"
                        onClick={handleMenuToggle}
                        className="w-full font-mono text-[10px] font-semibold tracking-widest uppercase py-3 bg-gold text-dark rounded flex items-center justify-center gap-2 hover:bg-[#d4b06a] transition-colors duration-200"
                    >
                        <PhoneCall size={12} />
                        Request a Quote
                    </Link>
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 lg:hidden"
                    onClick={handleMenuToggle}
                />
            )}
        </>
    );
}