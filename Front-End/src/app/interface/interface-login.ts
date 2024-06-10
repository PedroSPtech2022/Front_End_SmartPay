export interface Login{
    email: string;
    password:string;
}

export interface Login_Response{
    name: string; 
    email: string;
    password:string;
    type_user: string;
    token: string;
    id_executive: string;
    id_cost_center:string;
}