export interface Account {
    // id?:number;
    // login?:string,
    // password?:string;
    _id?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    pseudo?: string;

    firstName?: string;
    lastName?: string;

    address?: string;
    addressAdd?: string;
    zipCode?: string;
    city?: string;
    country?: string;
    mobile?: string;
    picture?: string;

}
