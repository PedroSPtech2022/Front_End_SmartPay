import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../services/login-service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router:Router, private isLogged: LoginService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
    if(this.isLogged.isLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }
} 