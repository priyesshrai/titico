"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./ui/buttons";
import { MoveUpRight, PhoneCallIcon } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface Menu {
    label: string;
    path: string;
    description?: string;
}

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean | null>(false);
    const currentPath = usePathname();
    const [hoverMenu, setHoverMenu] = useState<string | null>(null);
    const topLine = useRef<HTMLSpanElement>(null);
    const bottomLine = useRef<HTMLSpanElement>(null);
    const mobMenu = useRef<HTMLDivElement>(null);
    const mobMenuOverlay = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const [open, setOpen] = useState(false);


    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 45) {
            setScrolled(true);
        } else {
            setScrolled(null);
        }
    });

    const menu: Menu[] = [
        {
            label: "Home",
            path: "/",
            description: "Where Tradition Continues",
        },
        {
            label: "Our Legacy",
            path: "/#",
            description: "A Story Across Generations"
        },
        {
            label: "The Craft",
            path: "/#",
            description: "Skill Passed Hand To Hand"
        },
        {
            label: "Collections",
            path: "/#",
            description: "Fabrics Shaped By Heritage"
        },
        {
            label: "Manufacturing",
            path: "/#",
            description: "Rooted In Process And Precision"
        },
        {
            label: "Contact",
            path: "/#",
            description: "Begin The Conversation"
        },
    ];
    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current
            .to([topLine.current, bottomLine.current], {
                position: "absolute",
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                transformOrigin: "center",
                duration: 0.3,
                ease: "power3.out",
            })
            .to(topLine.current, {
                rotate: 45,
                duration: 0.3,
                ease: "power3.out",
            }, "asd")
            .to(bottomLine.current, {
                rotate: -45,
                duration: 0.3,
                ease: "power3.out",
            }, "asd")
            // .to(mobMenuOverlay.current, {
            //     opacity: 1,
            //     pointerEvents: "auto",
            //     duration: 0.25,
            //     ease: "power2.out",
            // }, 0.1)
            .to(mobMenu.current, {
                x: 0,
                duration: 0.4,
                ease: "power4.out",
            }, 0.3);
    }, []);

    const handleMenuToggle = () => {
        if (!open) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
        setOpen(!open);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && open) {
                handleMenuToggle();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    return (
        <>
            <motion.header
                className="w-full sticky top-0 md:mt-3 mt-1.5 mb-5 py-2 px-6 z-30"
                initial={false}
                animate={{
                    backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
                    backgroundColor: scrolled
                        ? "rgba(248, 250, 252, 0.2)"
                        : "rgba(248, 250, 252, 0)",
                }}
                transition={{
                    type: "tween",
                    ease: [0.22, 1, 0.36, 1],
                    duration: 0.3,
                }}
            >
                <nav className={`w-full max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ease-in-out ${scrolled ? "h-16" : "h-24"}`}>
                    <Link className="relative" href="/">
                        <Image
                            src={"/images/logo/logo.png"}
                            width={150}
                            height={64}
                            alt="Titico Textiles"
                            className={`${scrolled ? "w-14" : "w-20"} h-auto transition-all duration-300 ease-in-out`}
                        />
                    </Link>

                    <div className="hidden lg:block">
                        {menu.map((items) => {
                            const isActive =
                                currentPath === items.path ||
                                currentPath.startsWith(`${items.path}/`);

                            return (
                                <Link
                                    className="relative px-3 inline-block py-2 text-gray-700 transition-all delay-150 hover:text-gray-900 font-yeseva font-medium "
                                    href={items.path}
                                    key={items.label}
                                    onMouseEnter={() => setHoverMenu(items.label)}
                                    onMouseLeave={() => setHoverMenu(null)}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <AnimatePresence mode="wait">
                                        {hoverMenu === items.label && (
                                            <motion.span
                                                layoutId="nav-hover"
                                                className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.97,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.98,
                                                }}
                                                transition={{
                                                    type: "tween",
                                                    ease: [0.22, 1, 0.36, 1],
                                                    duration: 0.5,
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <span
                                        className={`relative z-10 text-xl ${isActive ? "text-teal-600" : "text-gray-600"}`}
                                    >
                                        {items.label}
                                    </span>
                                    <span
                                        className={`relative z-10 text-[10px] leading-tight ${isActive ? "text-teal-600" : "text-sub"} block font-pop`}
                                    >
                                        {items.description}
                                    </span>
                                    {isActive && (
                                        <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500 to-teal-500/0" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* <Button className="hidden md:flex md:gap-2 md:items-center">
                        <PhoneCallIcon size={16} />
                        Contact Us
                    </Button> */}

                    <Button className="lg:hidden block relative w-10 p-0 hover:bg-transparent h-full bg-transparent z-50"
                        onClick={handleMenuToggle}
                    >
                        <span className="w-full h-px absolute left-1/2 -translate-x-1/2 top-[43%] bg-dark inline-block" ref={topLine} />
                        <span className="w-full h-px absolute left-1/2 -translate-x-1/2 top-[57%] bg-dark inline-block" ref={bottomLine} />
                    </Button>

                </nav>
            </motion.header>
            {/* <div ref={mobMenuOverlay} className="fixed inset-y-0 max-w-[90%] w-full bg-gray-100/40 backdrop-blur-sm z-40 pointer-events-none opacity-0"
            /> */}

            <div ref={mobMenu} className="fixed top-0 left-0 h-full max-w-72 w-full bg-gray-100 border-r border-gray-300 p-4 z-50 -translate-x-full">
                <div className="w-full">
                    <Link className="relative" href="/">
                        <Image
                            src={"/images/logo/logo.png"}
                            width={150}
                            height={64}
                            alt="Titico Textiles"
                            className="md:w-16 w-11 h-auto"
                        />
                    </Link>
                </div>
                <div className="mt-10 w-full flex flex-col gap-1">
                    {menu.map((items) => {
                        const isActive =
                            currentPath === items.path ||
                            currentPath.startsWith(`${items.path}/`);

                        return (
                            <Link
                                className="relative w-full px-3 py-1 text-gray-700 transition-all delay-150 hover:text-gray-900 font-medium font-yeseva"
                                href={items.path}
                                key={items.label}
                                onClick={handleMenuToggle}
                            >
                                <div className={`relative z-10 px-4 py-2 rounded-md w-full flex items-center justify-between ${isActive ? "text-white bg-dark" : "text-gray-600 hover:bg-gray-50"
                                    }`}>
                                    <div className="flex flex-col">
                                        <span>
                                            {items.label}
                                        </span>
                                        <span className="text-[10px] leading-tight font-pop">
                                            {items.description}
                                        </span>
                                    </div>
                                    <MoveUpRight size={16} />
                                    {isActive && (
                                        <span
                                            className="absolute left-0 -bottom-px w-full h-px bg-linear-to-r from-blue-500/0 via-blue-500 to-blue-500/0"
                                            style={{
                                                boxShadow: ` 0 0 8px rgba(59,130,246,0.9), 0 0 16px rgba(59,130,246,0.6)`
                                            }}
                                        />
                                    )}
                                </div >
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
