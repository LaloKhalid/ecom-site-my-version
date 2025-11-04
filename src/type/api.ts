export interface ImageVariant {
    url:string;
    width: number;
    height: number;
    alt?: string | null;
}

export interface Price{
    currency: 'EUR' | 'SEK' | 'USD';
    amount: number;
}

export interface Product {
    id: string;
    title: string;
    slug: string;
    price: Price;
    brand: string;
    images: ImageVariant[];
} 

export interface Collection{
    id: string;
    title: string;
    slug: string;
    heroImage: ImageVariant | null;
}