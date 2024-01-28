import { StaticImageData } from "next/image";

export interface ButtonLinkMap {
    [buttonText: string]: string;
}

export interface CardProps {
    imageUrl: StaticImageData;
    name: string;
    fromTo: string;
    price: string;
    addad: number;
}
export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export interface TableRowProps {
    index: number;
    name: string;
    buy: number;
    sell: number;
    percentage: number;
    marketCap: number;
}
