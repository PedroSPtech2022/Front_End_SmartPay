import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login, Login_Response } from "../interface/interface-login";

@Injectable({
    providedIn:'root',
})
export class LoginService {

    private url = "http://localhost:8080/api/v1/login"


    constructor(private http: HttpClient, private router:Router) { }

    httpHeaders = {
        headers : new HttpHeaders({
            'Content-Type':'application/json',
            "Acess-Control-Allow-Origin":"*"
        })
    };

    loadingLogin(login:Login): Promise<Login_Response>{
        return this.http.post<Login_Response>(this.url, JSON.stringify(login), this.httpHeaders).toPromise().then(res => res as Login_Response);
    }

    isLoggedIn():boolean{
        const perfil = sessionStorage.getItem('type_user');
        return perfil ? true: false;
    }
}