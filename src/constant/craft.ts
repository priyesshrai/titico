import {
    PackageCheck,
    PenTool,
    Factory,
    Droplets,
    ShieldCheck,
    Truck,
} from "lucide-react";

export const steps = [
    {
        number: "01",
        phase: "Raw Material",
        icon: PackageCheck,
        title: "Yarn Selection",
        body: "Premium-quality yarns are carefully selected based on texture, strength, softness, and fabric performance. The right yarn foundation ensures consistency across Silk, Cotton, Linen, Ikat, Silk-Cotton, Tweed, and Herringbone fabric collections.",
        tags: [
            "Premium Yarns",
            "Texture Check",
            "Quality Selection"
        ],
        detail:
            "Careful yarn selection plays a key role in achieving fabric durability, finish consistency, and overall weaving quality.",
    },

    {
        number: "02",
        phase: "Preparation",
        icon: PenTool,
        title: "Fabric Development",
        body: "Our team works on fabric structure, weave patterns, and construction details to create fabrics suitable for Home & Fashion applications. Every development stage focuses on balancing texture, appearance, and functionality.",
        tags: [
            "Weave Planning",
            "Pattern Development",
            "Fabric Structure"
        ],
        detail:
            "Every fabric design is developed with attention to texture, finish, and long-term usability.",
    },

    {
        number: "03",
        phase: "Production",
        icon: Factory,
        title: "Weaving",
        body: "The weaving stage combines skilled workmanship with modern manufacturing support to maintain fabric consistency and precise detailing. Each weave is monitored carefully to ensure quality across different fabric styles.",
        tags: [
            "Precision Weaving",
            "Consistent Quality",
            "Production Control"
        ],
        detail:
            "Strong weave construction helps maintain fabric durability, appearance, and production consistency.",
    },

    {
        number: "04",
        phase: "Treatment",
        icon: Droplets,
        title: "Dyeing & Finishing",
        body: "Fabrics undergo dyeing and finishing processes to achieve the required softness, texture, color appearance, and final presentation. Special attention is given to maintaining fabric quality throughout the process.",
        tags: [
            "Color Processing",
            "Soft Finish",
            "Texture Enhancement"
        ],
        detail:
            "Finishing techniques enhance the overall fabric feel, presentation, and market-ready quality.",
    },

    {
        number: "05",
        phase: "Inspection",
        icon: ShieldCheck,
        title: "Quality Control",
        body: "Every fabric batch passes through quality checks for weaving accuracy, texture consistency, finishing standards, and overall product reliability before dispatch.",
        tags: [
            "Fabric Inspection",
            "Quality Standards",
            "Consistency Check"
        ],
        detail:
            "Multiple quality inspections help maintain dependable production standards for every order.",
    },

    {
        number: "06",
        phase: "Dispatch",
        icon: Truck,
        title: "Packing & Delivery",
        body: "Finished fabrics are securely packed and prepared for smooth domestic and international deliveries while maintaining product safety during transportation.",
        tags: [
            "Secure Packing",
            "Export Ready",
            "Timely Dispatch"
        ],
        detail:
            "Proper packaging and dispatch management ensure fabrics reach clients in excellent condition.",
    },
];
/* ─── Stats ─── */
export const stats = [
    { val: "100+", unit: "Fabric Variations", desc: "Jacquard, rapier, dobby & pit" },
    { val: "Global", unit: "Export Reach", desc: "Weavers, dyers, QC staff" },
    { val: "Premium", unit: "Quality Standards", desc: "Manufacturing floor area" },
    { val: "Trusted", unit: "Manufacturing Support", desc: "Incoming yarn refused on quality" },
    { val: "Multiple", unit: "Fabric Categories", desc: "Colour fastness target" },
    { val: "Reliable", unit: "Delivery Commitment", desc: "Sample development turnaround" },
];

/* ─── Materials ─── */
export const materials = [
    {
        name: "Pure Silk",
        origin: "Varanasi sericulture",
        props: ["GI-tagged", "Twist-tested", "Wild & cultivated"],
        img: "/images/fabric/silk.jpeg",
    },
    {
        name: "Long-Staple Cotton",
        origin: "Gujarat & Maharashtra",
        props: ["Certified mills", "400 thread count", "Reactive-dye ready"],
        img: "/images/fabric/cotton.jpeg",
    },
    {
        name: "Natural Linen",
        origin: "Europe (processed India)",
        props: ["Zero synthetic blend", "Slub-preserved", "GOTS compliant"],
        img: "/images/fabric/linen.jpeg",
    },
    {
        name: "Ikat Yarn",
        origin: "Pochampally & Patan",
        props: ["Resist-dyed", "Hand-aligned", "Warp & weft"],
        img: "/images/fabric/ikat.jpeg",
    },
];