export interface WSCard {
    name: {
        en: string;
        jp: string;
    };
    color: string;
    rarity?: string;
    cardNo?: string;
    set?: string;
    imageUrl: string;
    side?: string;
    type: string;
    level: number;
    cost: number;
    power: number;
    soul: number;
    trait?: {
        en: string[];
        jp?: string[];
    };
    triggers?: string[];
    flavor?: string;
    text?: string;
    vartext?: {
        Constant: string;
        Action: string;
    };
    typetext?: TypeText[];
    superDetailedText?: DetailedText[];
}
export interface TypeText {
    type: string;
    effect: string;
    cost?: {
        stock: string;
        other: string;
    };
}
export interface DetailedText {
    type: string;
    effect: string;
    cost: {
        action: string;
        value: number;
    }[];
}
