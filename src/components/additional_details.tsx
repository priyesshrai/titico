import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { steps } from "../constant/additional_details";

const stats = [
    { num: "120", suffix: "+", label: "Looms running" },
    { num: "48", suffix: "h", label: "Order to dispatch" },
    { num: "0.5", suffix: "ΔE", label: "Colour accuracy" },
    { num: "100", suffix: "%", label: "4-Point inspected" },
];

export default function ManufacturingProcess() {

    return (
        <Section className="bg-cream">
            <Wrapper>
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-7 h-px bg-gold" />
                        <span className="font-mono text-[10px] font-bold tracking-[.16em] uppercase text-gold">How we work</span>
                        <div className="w-7 h-px bg-gold" />
                    </div>
                    <h2 className="font-play text-3xl lg:text-4xl font-medium text-dark">
                        From fibre to <em className="italic text-gold">finished fabric</em>
                    </h2>
                    <p className="text-sub text-sm max-w-sm mt-2 leading-relaxed">
                        Six precision stages — each inspected, every metre accountable.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden"
                >
                    {steps.map((step, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col gap-4 p-7 cursor-pointer transition-colors duration-200 bg-white hover:bg-[#fffdf9]`}
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between">
                                    <span className={`font-mono text-[11px] font-bold tracking-wider text-gold/60`}>
                                        {step.num}
                                    </span>
                                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-gold border border-gold/30 bg-gold/8 px-2 py-1 rounded">
                                        {step.tag}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl transition-all duration-200 bg-gold/8 border-gold/18`}>
                                    <span className={"opacity-70"}>{step.icon}</span>
                                </div>

                                {/* Name */}
                                <span className={`font-mono text-[13px] font-bold tracking-wide transition-colors $text-dark`}>
                                    {step.name}
                                </span>

                                {/* Divider */}
                                <div className={`h-px bg-gold/15`} />

                                {/* Body */}
                                <p className={`text-[.82rem] leading-relaxed text-sub`}>
                                    {step.body}
                                </p>

                                {/* Pills */}
                                <div className="flex flex-wrap gap-1.5">
                                    {step.pills.map((p, i) => (
                                        <span
                                            key={i}
                                            className={`font-mono text-[8.5px] font-bold tracking-wider uppercase px-2 py-1 rounded border bg-gold/7 text-sub border-gold/15"
                                            `}
                                        >
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 border border-gold/15 rounded-xl overflow-hidden mt-4">
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white py-5 text-center">
                            <div className="font-play text-dark text-2xl font-medium">
                                {s.num}<span className="text-gold">{s.suffix}</span>
                            </div>
                            <div className="font-mono text-[9px] font-bold tracking-widest uppercase text-sub mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}