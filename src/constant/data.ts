export const stages = [
    {
        id: "01",
        phase: "Raw Material",
        title: "The Yarn Arrives",
        subtitle: "Where quality is decided before a single thread is woven",
        img: "/images/manufacturing/img-1.png",
        imgAlt: "Raw silk and cotton yarn spools at Titico warehouse",
        body: `Every fabric's quality ceiling is set the moment yarn enters our gates. We source long-staple cotton from certified mills in Gujarat and Maharashtra, pure silk from Varanasi sericulture cooperatives, and linen from European suppliers processed locally for climate adaptation.

Each incoming lot undergoes a mandatory 48-hour hold. During this time our in-house testing team checks tenacity (resistance to breaking), twist-per-inch uniformity, moisture percentage, and visual defect sampling across a minimum of 10% of the consignment. Lots that fall outside our tolerance bands are returned — no exceptions, no renegotiations.`,
        facts: [
            { label: "Rejection rate", value: "~8%", note: "of incoming yarn refused" },
            { label: "Test window", value: "48 hrs", note: "mandatory hold per lot" },
            { label: "Sample size", value: "10%+", note: "of each consignment checked" },
        ],
        accent: "bg-[#f3ede4]",
        imgRight: false,
    },
    {
        id: "02",
        phase: "Preparation",
        title: "Warping the Loom",
        subtitle: "Four thousand threads, one perfect tension",
        img: "/images/manufacturing/img-1.png",
        imgAlt: "Warp beam preparation at Titico loom hall",
        body: `Warping is the invisible foundation of every fabric. A single beam for a 120cm-wide cloth may carry over 4,000 individual thread ends — and every one of them must sit at precisely the same tension or the finished weave will show inconsistency that no finishing process can correct.

We use sectional and beam warping machines with per-end tension monitoring. Our warping operators — some of whom have worked this station for over twenty years — run a manual tension check every thirty minutes in addition to the electronic monitoring. Experience, it turns out, catches things that sensors miss: a subtle variation in yarn feel that signals a dying bobbin, a faint unevenness in the winding pattern that precedes a break.`,
        facts: [
            { label: "Ends per beam", value: "4,000+", note: "at identical tension" },
            { label: "Manual checks", value: "Every 30 min", note: "alongside electronic monitoring" },
            { label: "Avg. operator exp.", value: "15 yrs", note: "at the warping station" },
        ],
        accent: "bg-cream",
        imgRight: true,
    },
    {
        id: "03",
        phase: "Weaving",
        title: "The Loom Hall",
        subtitle: "120 looms, one standard",
        img: "/images/banner/banner-3.png",
        imgAlt: "Active Jacquard and rapier looms on the Titico production floor",
        body: `Our 12,000 sq ft loom hall operates 120 machines simultaneously — Jacquard looms for the intricate brocade work Varanasi is known for, rapier looms for plain and twill constructions, dobby looms for smaller-scale geometric patterns, and traditional pit looms where handwoven orders are produced alongside the power-woven lines.

Real-time pick density monitoring and electronic stop-motion systems halt production the instant a thread breaks or a weft insertion fails — preventing a single defect from propagating across metres of cloth. Loom operators work in pairs during peak production: one managing output, one watching the fell of the cloth, where defects first become visible to a trained eye.`,
        facts: [
            { label: "Active looms", value: "120", note: "Jacquard, rapier, dobby, pit" },
            { label: "Floor area", value: "12,000 sq ft", note: "production hall" },
            { label: "Stop-motion", value: "Real-time", note: "defect detection system" },
        ],
        accent: "bg-[#f3ede4]",
        imgRight: false,
    },
    {
        id: "04",
        phase: "Dyeing",
        title: "Colour from the Ground Up",
        subtitle: "REACH-compliant, ISO-tested, honest to the yarn",
        img: "/images/manufacturing/img-2.png",
        imgAlt: "Yarn dyeing unit at Titico — reactive and acid dye processes",
        body: `We dye before weaving for our Ikat range (resist-dyeing the warp yarn before it reaches the loom) and after weaving for most other constructions. Reactive dyes are used for cellulosic fibres — cotton and linen; acid dyes for protein fibres — silk and wool blends. All dyes are REACH-compliant and OEKO-TEX certified.

Colour fastness to washing, light, and rubbing is tested against ISO standards before release. Our target is Grade 4–5 on the ISO scale across all three tests — and we do not release fabric that falls below Grade 4 on any single axis. The dyeing unit also operates a closed water-loop system: 80% of process water is recovered, filtered, and reused, reducing effluent to a fraction of industry norms.`,
        facts: [
            { label: "Fastness target", value: "Grade 4–5", note: "ISO scale, all three tests" },
            { label: "Water recovery", value: "80%", note: "closed-loop system" },
            { label: "Dye compliance", value: "REACH + OEKO-TEX", note: "certified inputs only" },
        ],
        accent: "bg-cream",
        imgRight: true,
    },
    {
        id: "05",
        phase: "Finishing",
        title: "The Final Hand",
        subtitle: "Where fabric earns its feel",
        img: "/images/fabric/linen.jpeg",
        imgAlt: "Fabric finishing and calendering unit at Titico",
        body: `Finishing determines how a fabric behaves in the hand, in the wash, and on the body. We apply finishing treatments to specification — mercerising for cotton lustre, calendering for a smooth press finish, sanforising to pre-shrink before garment cutting, and enzyme washing for that distinctive broken-in softness that is increasingly requested by European fashion buyers.

Each finishing recipe is matched to the fabric construction and the end-use requirement. A fabric destined for shirting gets a different finish than one headed into upholstery. We hold over 40 finishing formulas on file — adjusted and refined over two decades of export experience — and can develop a custom recipe for buyers with specific hand-feel requirements.`,
        facts: [
            { label: "Finish recipes", value: "40+", note: "on file, adjustable to spec" },
            { label: "Processes", value: "Mercerising · Calendering · Sanforising · Enzyme wash", note: "" },
            { label: "Custom dev", value: "7 days", note: "custom hand-feel turnaround" },
        ],
        accent: "bg-[#f3ede4]",
        imgRight: false,
    },
    {
        id: "06",
        phase: "Quality Control",
        title: "Nothing Leaves Unchecked",
        subtitle: "Twelve inspectors, one grade: A",
        img: "/images/manufacturing/img-3.png",
        imgAlt: "Quality control inspection under D65 standardised lighting at Titico",
        body: `Our QC team of twelve inspectors works entirely independently of the production floor — they report directly to management and have authority to hold any lot without approval. Every piece of fabric is inspected under standardised D65 daylight-equivalent lighting against the American 4-point system: penalty points are assigned for each defect, and the total penalty per 100 linear yards determines the grade.

We export only A-grade fabric. Seconds are either used internally for sample cuts and training material or sold locally — never exported under the Titico name. Each approved lot receives a unique code traceable back to its warp beam, dye batch, and loom — allowing us to isolate any quality issue with surgical precision if a buyer ever raises a concern.`,
        facts: [
            { label: "QC team", value: "12 inspectors", note: "independent of production" },
            { label: "Grading system", value: "4-point (American)", note: "industry standard" },
            { label: "Export grade", value: "A only", note: "no exceptions" },
        ],
        accent: "bg-cream",
        imgRight: true,
    },
];

/* Artisan profiles */
export const artisans = [
    {
        name: "Mohammad Ilyas",
        role: "Master Jacquard Weaver",
        exp: "34 years",
        quote: "The pattern lives in the cards. But the fabric lives in the tension — and only a hand knows what a machine cannot feel.",
        img: "/images/banner/banner-1.png",
        specialty: "Banarasi Brocade · Jacquard · Kimkhwab",
    },
    {
        name: "Sunita Devi",
        role: "Lead Ikat Dyer",
        exp: "22 years",
        quote: "Resist dyeing is about what you protect, not just what you colour. The white space is as important as the dye.",
        img: "/images/banner/banner-2.png",
        specialty: "Warp Ikat · Double Ikat · Natural resist",
    },
    {
        name: "Ramesh Yadav",
        role: "Head of Warping",
        exp: "28 years",
        quote: "I can feel an uneven beam before the machine shows it. Twenty-eight years teaches your fingers what numbers cannot.",
        img: "/images/banner/banner-3.png",
        specialty: "Sectional warping · Beam setting · Tension calibration",
    },
    {
        name: "Fatima Khatoon",
        role: "Senior QC Inspector",
        exp: "18 years",
        quote: "D65 light shows defects. Experience shows patterns. The two together tell you whether a loom needs adjustment before the next run.",
        img: "/images/banner/banner-4.png",
        specialty: "4-point grading · Defect root cause · Export certification",
    },
];

/* Factory numbers */
export const numbers = [
    { val: "120", label: "Active looms", sub: "Jacquard, rapier, dobby & pit" },
    { val: "300+", label: "Artisans", sub: "Weavers, dyers, finishers, QC" },
    { val: "12,000", label: "Sq ft", sub: "Manufacturing floor" },
    { val: "4th", label: "Generation", sub: "Family ownership & craft" },
    { val: "80%", label: "Water recovery", sub: "Closed-loop dye system" },
    { val: "A", label: "Only export grade", sub: "No seconds leave our gates" },
    { val: "48 hrs", label: "Yarn hold", sub: "Before entering production" },
    { val: "45+", label: "Years", sub: "Of unbroken manufacturing" },
];

/* Loom types */
export const looms = [
    {
        name: "Jacquard",
        count: "32 looms",
        desc: "Up to 10,000-hook capacity. Used for the intricate brocade patterns — Banarasi bootis, floral jaal, kimkhwab gold-thread work — that Varanasi is known for worldwide.",
        best: "Brocade · Buti · Kimkhwab",
        icon: "⟁",
        image:"/images/manufacturing/20.png"
    },
    {
        name: "Rapier",
        count: "48 looms",
        desc: "High-speed, versatile insertion mechanism. Handles everything from fine cotton muslin to medium-weight linen blends. Our highest-volume loom for commercial export orders.",
        best: "Cotton · Linen · Tweed",
        icon: "⟶",
        image:"/images/manufacturing/21.png"
    },
    {
        name: "Dobby",
        count: "28 looms",
        desc: "Controlled shedding for geometric patterns — herringbone, houndstooth, small-repeat textures. Popular for suiting and upholstery constructions.",
        best: "Herringbone · Dobby texture · Suiting",
        icon: "⊞",
        image:"/images/manufacturing/22.png"
    },
    {
        name: "Pit Loom",
        count: "12 looms",
        desc: "Traditional handlooms recessed into the floor — the original Banarasi weaving method. Operated by our most experienced weavers for heritage and collector orders. Irreplaceable for certain silk constructions.",
        best: "Heritage silk · Handwoven brocade · Collector pieces",
        icon: "⌇",
        image:"/images/manufacturing/23.png"
    },
];
