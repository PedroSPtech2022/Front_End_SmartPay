import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../interface/interface-login";

@Injectable({
    providedIn:'root',
})
export class LoginService {

    private url = "http://localhost:7070/api"


    constructor(private http: HttpClient, private router:Router) { }

    httpHeaders = {
        headers : new HttpHeaders({
            'Content-Type':'application/json',
            "Acess-Control-Allow-Origin":"*"
        })
    };

    loadingLogin(login:Login): Promise<Login>{
        return this.http.post<Login>(this.url, JSON.stringify(login), this.httpHeaders).toPromise().then(res => res as Login);
    }

    isLoggedIn():boolean{
        const perfil = sessionStorage.getItem('type_user');
        return perfil ? true: false;
    }
}