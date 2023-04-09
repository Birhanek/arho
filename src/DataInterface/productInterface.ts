
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

export interface ImageT {
    url: string,
    alt: string
}


export interface ProductState {
    product:Product[],
    isLoading:boolean,
    isError :boolean,
    message:string
}

export const Images = {
    logo:{
        src:'/Images/company_logo.jpg',
        alt: 'Araho logo of the company'
    } 
    
}

