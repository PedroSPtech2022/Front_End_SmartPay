import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login-service';
import { Table } from 'primeng/table';
import { Login, Login_Response } from '../../../interface/interface-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  isLoading: boolean = false;
  messageError: string = '';

  logins: Login = {};
  logins_res: Login_Response = {token:'',name: '', email: '', password:'', type_user: '',id_executive: '',id_cost_center: ''};

  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(){
    
  }

  onGlobalFilter(table: Table,event: Event){
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }
  
  saveSession(name:string,type_user:string,email:string,token:string,id_executive:string,id_cost_center:string){
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("type_user",type_user);
    sessionStorage.setItem("token",token);
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("id_executive",id_executive);
    sessionStorage.setItem("id_cost_center",id_cost_center);
  }

  loadingLogin(){
    this.isLoading = true;

    this.loginService.loadingLogin(this.logins).then(res =>{
        this.logins_res = res.body;
        this.isLoading = true;

        if(this.logins_res.type_user === 'EXEC'){
          this.saveSession(this.logins_res.name,this.logins_res.type_user,this.logins_res.email,this.logins_res.token,this.logins_res.id_executive,this.logins_res.id_cost_center);
          this.router.navigateByUrl('executivo/list-employee');
        }else if(this.logins_res.type_user === 'FUNC'){
          this.saveSession(this.logins_res.name,this.logins_res.type_user,this.logins_res.email,this.logins_res.token,this.logins_res.id_executive,this.logins_res.id_cost_center);
          this.router.navigateByUrl('executivo/list-variable-cost');
        } else {
          this.messageError = 'Erro ao tentar Logar';
          this.isLoading = false; 
        }
      },
      (error)=>{
        this.messageError = "Erro ao tentar logar";
        this.isLoading = false;
        console.error(error);
      }
    )
  }

}
