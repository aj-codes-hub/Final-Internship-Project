
export interface Auther {
    name:string;
    username:string; 
    email:string;
    password:string;
    profileImg:string;
    coverPhoto:string;
    phoneNumber:string;
    country:string;
    role:  "author" | "user";
    city:string;
    biography:string;
}