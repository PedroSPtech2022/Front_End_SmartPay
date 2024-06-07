import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login-service';
import { Table } from 'primeng/table';
import { Login } from '../../../interface/interface-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  isLoading: boolean = false;
  messageError: string = '';

  logins: Login = {token: '', user:{ name: '', email: '', password:'', type_user: '' }};

  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(){
    
  }

  onGlobalFilter(table: Table,event: Event){
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }
  
  saveSession(name:string,type_user:string,email:string,token:string){
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("type_user",type_user);
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("email",email);
  }

  loadingLogin(){
    this.logins.user.email = (document.getElementById('email') as HTMLInputElement).value;
    this.logins.user.password = (document.getElementById('password') as HTMLInputElement).value;
    this.isLoading = true;

    this.loginService.loadingLogin(this.logins).then(
      (data:Login) =>{
        this.logins = data;
        this.isLoading = true;

        if(this.logins.user.type_user === 'EXEC'){
          this.saveSession(this.logins.user.name,this.logins.user.type_user,this.logins.user.email,this.logins.token);
          this.router.navigateByUrl('executivo/list-employee');
        }else if(this.logins.user.type_user === 'FUNC'){
          this.saveSession(this.logins.user.name,this.logins.user.type_user,this.logins.user.email,this.logins.token);
          this.router.navigateByUrl('executivo/list-variable-cost');
        } else {
          this.messageError = 'Erro ao tentar Logar';
          this.isLoading = false; 
        }
      }
    )
  }

}
