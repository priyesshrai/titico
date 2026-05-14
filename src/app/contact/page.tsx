"use client";
import Section from '@/src/components/ui/section';
import Wrapper from '@/src/components/ui/wrapper';
import { FadeUp } from '@/src/lib/fade_up';
import { useRef, useState } from 'react';


const inquiryTypes = [
    "Fabric Sample Request",
    "Bulk / Export Order",
    "Custom Weave Inquiry",
    "Private Label Garments",
    "General Question",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", company: "", email: "", phone: "", country: "", type: "", message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>

            {/* ── HERO ── */}
            <Section className="bg-cream">
                <Wrapper className="lg:py-20 py-16 gap-0">
                    <div className="max-w-2xl">
                        <FadeUp>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-7 h-px bg-gold" />
                                <span className="font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-gold">
                                    Varanasi, India · Est. 1978
                                </span>
                                <div className="w-7 h-px bg-gold" />
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h1 className="font-yeseva text-dark text-5xl lg:text-6xl leading-[1.1] mb-5">
                                Begin the <br />
                                <em className="text-gold not-italic">conversation</em>
                            </h1>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="font-pop font-light text-cont text-lg leading-relaxed">
                                Whether you are a fashion house, an interior studio, or a buyer looking for your first sample — the conversation begins here. We respond to every inquiry within one working day.
                            </p>
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

            {/* ── MAIN CONTENT ── */}
            <Section className="bg-[#f3ede4]">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">

                        {/* ─ Left: Info ─ */}
                        <FadeUp>
                            <div className="flex flex-col gap-10">

                                {/* Address */}
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">Our Location</div>
                                    <h3 className="font-yeseva text-dark text-2xl mb-2">Titico Textiles</h3>
                                    <p className="font-pop font-light text-cont text-sm leading-relaxed">
                                        Weaving Lane, Peeli Kothi<br />
                                        Varanasi – 221001<br />
                                        Uttar Pradesh, India
                                    </p>
                                </div>

                                {/* Contact details */}
                                <div className="flex flex-col gap-4">
                                    {[
                                        {
                                            label: "Export Inquiries",
                                            value: "export@titicotextiles.com",
                                            icon: "✉",
                                        },
                                        {
                                            label: "WhatsApp",
                                            value: "+91 98000 00000",
                                            icon: "📱",
                                        },
                                        {
                                            label: "Office",
                                            value: "+91 542 000 0000",
                                            icon: "☎",
                                        },
                                        {
                                            label: "Working Hours",
                                            value: "Mon–Sat, 9:30 AM – 6:30 PM IST",
                                            icon: "🕘",
                                        },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-3">
                                            <span className="text-base mt-0.5">{item.icon}</span>
                                            <div>
                                                <div className="font-mono text-[9px] uppercase tracking-widest text-[#aaa] mb-0.5">{item.label}</div>
                                                <div className="font-pop text-sm text-dark">{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="border-t border-[#d8cfc4]" />

                                {/* Response promise */}
                                <div className="bg-dark rounded-xl p-5">
                                    <div className="font-mono text-[9px] uppercase tracking-widest text-gold mb-2">Our commitment</div>
                                    <p className="font-pop text-sm text-[#b0a898] leading-relaxed">
                                        Every inquiry receives a personal response — not a template. We will ask about your requirement, discuss our capabilities, and propose a sample plan within 24 hours.
                                    </p>
                                </div>

                                {/* Sample turnaround */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { val: "24h", lbl: "Response time" },
                                        { val: "7–10", lbl: "Days to first sample" },
                                        { val: "20+", lbl: "Export countries" },
                                        { val: "500+", lbl: "Fabric SKUs" },
                                    ].map((s) => (
                                        <div key={s.lbl} className="bg-white rounded-xl p-4">
                                            <div className="font-yeseva text-2xl text-dark">{s.val}</div>
                                            <div className="font-pop text-[10px] text-[#888] mt-0.5 tracking-wide">{s.lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeUp>

                        {/* ─ Right: Form ─ */}
                        <FadeUp delay={0.1}>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full min-h-100 text-center py-12">
                                    <div className="text-5xl mb-6">🧵</div>
                                    <h3 className="font-yeseva text-dark text-3xl mb-3">Message received</h3>
                                    <p className="font-pop font-light text-cont text-base max-w-sm">
                                        We will be in touch within one working day. Thank you for reaching out to Titico Textiles.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-5">
                                    <div>
                                        <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">Send an inquiry</div>
                                        <h3 className="font-yeseva text-dark text-2xl">Tell us what you need</h3>
                                    </div>

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Full Name *</label>
                                            <input
                                                required name="name" value={form.name} onChange={handleChange}
                                                placeholder="Your name"
                                                className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark placeholder:text-[#ccc] focus:outline-none focus:border-dark transition-colors"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Company</label>
                                            <input
                                                name="company" value={form.company} onChange={handleChange}
                                                placeholder="Company or brand name"
                                                className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark placeholder:text-[#ccc] focus:outline-none focus:border-dark transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Email *</label>
                                            <input
                                                required type="email" name="email" value={form.email} onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark placeholder:text-[#ccc] focus:outline-none focus:border-dark transition-colors"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Country</label>
                                            <input
                                                name="country" value={form.country} onChange={handleChange}
                                                placeholder="Your country"
                                                className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark placeholder:text-[#ccc] focus:outline-none focus:border-dark transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Inquiry type */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Inquiry Type *</label>
                                        <select
                                            required name="type" value={form.type} onChange={handleChange}
                                            className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark bg-white focus:outline-none focus:border-dark transition-colors appearance-none"
                                        >
                                            <option value="">Select an inquiry type</option>
                                            {inquiryTypes.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#888]">Message *</label>
                                        <textarea
                                            required name="message" value={form.message} onChange={handleChange}
                                            rows={5}
                                            placeholder="Describe what you are looking for — fabric type, quantity, end use, timeline..."
                                            className="font-pop text-sm border border-[#e4ddd4] rounded-lg px-4 py-3 text-dark placeholder:text-[#ccc] focus:outline-none focus:border-dark transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-mono text-[11px] font-semibold tracking-wide uppercase px-6 py-4 bg-dark text-cream rounded-lg hover:bg-[#2e2b26] transition-colors duration-200 mt-1"
                                    >
                                        Send Inquiry
                                    </button>

                                    <p className="font-pop text-[11px] text-[#aaa] text-center">
                                        By submitting, you agree to our privacy policy. We never share your details.
                                    </p>
                                </form>
                            )}
                        </FadeUp>
                    </div>
                </Wrapper>
            </Section>

        </main>
    );
}