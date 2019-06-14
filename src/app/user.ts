export interface User {
    id:number;
    name:string;
    password:string;
    email:string;
    role:string,
    address:{
        city:string,
        zipCode:string
    },
    phone:String
}
