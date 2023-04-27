
export default interface Product {
    id:string,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbNail:string,
    images:string[]
}
export interface ProductApi {
    products: Product[],
    total : number,
    skip: number,
    limit: number
}
export interface ImageT {
    url: string,
    alt: string
}
export type ProductProps = {
    index: number,
    product : Product
}


export interface ProductState {
    products: ProductApi ,
    isLoading:boolean,
    isError :boolean,
    message?:string
}

export const Images = {
    logo:{
        src:'/Images/company_logo.jpg',
        alt: 'Araho logo of the company'
    } 
    
}
export const Currencies = {
    Euro:'€',
    Dollar:'$',
    Pound:'£'
}

export enum Languages {
    English = 'English',
    NetherLands = 'Netherlands'
}
export const LanguageFlags = {
    flag:{
        UnitedKingdom: '/Images/UnitedKingdom.png',
        NetherLands:'/Images/Netherlands.png'
    }
}

