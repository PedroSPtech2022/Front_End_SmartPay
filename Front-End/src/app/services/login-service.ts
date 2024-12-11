import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login, Login_Response } from "../interface/interface-login";

@Injectable({
    providedIn:'root',
})
export class LoginService {

    private url = "http://54.197.45.43:8080/api/v1/login"

    constructor(private http: HttpClient, private router:Router) { }

    loadingLogin(login: Login): Promise<any> { 
        const headers = new HttpHeaders({
            'Content-Type':'application/json',
            "Acess-Control-Allow-Origin":"*",
            'Authorization': 'authorization'
        });
        return this.http.post(this.url, JSON.stringify(login), { headers: headers, observe: 'response' }).toPromise().then(res => res).catch(error => { throw error; });
    }
    
    isLoggedIn():boolean{
        const perfil = sessionStorage.getItem('type_user');
        return perfil ? true: false;
    }
}