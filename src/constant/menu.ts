interface Menu {
    label: string;
    path: string;
    description?: string;
}

export const menu: Menu[] = [
    { label: "Home", path: "/", description: "Where tradition continues" },
    { label: "Our Legacy", path: "/legacy", description: "A story across generations" },
    { label: "The Craft", path: "/craft", description: "Skill passed hand to hand" },
    { label: "Collections", path: "/collections", description: "Fabrics shaped by heritage" },
    { label: "Manufacturing", path: "/#", description: "Rooted in process & precision" },
    { label: "Contact", path: "/contact", description: "Begin the conversation" },
];
