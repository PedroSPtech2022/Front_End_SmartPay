import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_end';

  isTelaLogin:boolean = true;
  isTelaFirstAcess:boolean = false;


  constructor(private router: Router, private isLogged: LoginService){}

  ngOnInit(){
    // this.router.events.subscribe(()=>{
    //   if(this.isLogged.isLoggedIn()){
    //     this.isTelaLogin = false;
    //   } else if(this.router.url == "/executivo/first-acess"){
    //     this.isTelaFirstAcess = true;
    //     this.isTelaLogin = false;
    //   }else{
    //     this.isTelaFirstAcess = false;
    //     this.isTelaLogin = true;
    //   }
    // });
  }
  
}
