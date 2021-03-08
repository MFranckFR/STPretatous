export interface Product {
    id?: string;
    _id?: string;
    title?: string;
    description?: string;
    status?: string;
    owner?:string;
    ownerPseudo?:string;
    available?:boolean;
    image?: string;
}
