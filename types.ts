// Kenna Wylie's work

export type GatchaProps = {
    name: string;
    rarity: string;
    description: string;
    img: string;
};

export type Character = {
    name: string,
    rarity: string,
    description: string,
    img: string,
};

export type Category = {
    key: string,
    weight: number,
    pulls: Character[],
};