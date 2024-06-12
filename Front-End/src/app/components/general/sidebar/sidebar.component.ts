import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  activeUrl!: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute){}

    ngOnInit(){
      this.validateUser();
      this.router.events.subscribe(()=>{
        this.activeUrl = this.router.url
      })
    }

    isActive(itemUrl:string):boolean{
      return this.activeUrl == itemUrl
    }

    validateUserExecutive(){
      this.items = [
        {
          separator:true
        },
        {
          label:'Controle de Gastos Variaveis',
          items:[
            {
            label:'Lista de Gastos Variaveis',
            icon:'pi pi-table',
            url: '/executivo/list-cost-variable'
          }
          ],          
        },
        {
          separator:true
        },
        {
          label:'Controle de Funcionarios',
          items:[
            {
            label:'Cadastrar funcionario',
            icon:'pi pi-user-plus',
            url: '/executivo/registry-employee'
          },
          {
            label:'Controle de acesso',
            icon:'pi pi-users',
            url:'/executivo/list-employee'
          }],          
        },
        {
          separator:true
        },
        {
          label:'Controle do Centro de Custos',
          items:[
            {
            label:'Informações de Centro de Custos',
            icon:'pi pi-exclamation-circle',
            url: 'executivo/info-center-cost'
          },],          
        },
        {
          separator:true
        },
        {
          label:'Logout',
          items:[
            {
              label:'Logout',
              icon:'pi pi-sign-out',
              command: () => this.logout(),
          },],          
        }
      ];
    }

    validateUserEmployee(){
      this.items = [
        {
          separator:true
        },
        {
          label:'Gastos Variaveis',
          items:[
            {
            label:'Lista de Gastos Variaveis',
            icon:'pi pi-table',
            url: '/employee/list-cost-variable'
            }
          ],          
        },
        {
          separator:true
        },
        {
          label:'Logout',
          items:[
            {
              label:'Logout',
              icon:'pi pi-sign-out',
              command: () => this.logout(),
          },],          
        }
      ];
    }

    validateUser(){
      const type_user = sessionStorage.getItem("type_user");
      if(type_user == "EXEC"){
      this.validateUserExecutive();
      } else if(type_user == "FUNC"){
        this.validateUserEmployee();
      }
    }

    logout(){
      sessionStorage.removeItem('type_user');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('name');
      this.router.navigateByUrl('login');
    }
}