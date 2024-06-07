export interface Login{
    token:string; 
    user:{
    name: string; 
    email: string;
    password:string;
    type_user: string;
    }
}