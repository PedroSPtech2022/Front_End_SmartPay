import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  activeUrl!: string

  constructor(private router:Router){}
    ngOnInit(){
      this.items = [
        {
          separator:true
        },
        {
          label:'Usuario',
          items:[
            {
            label:'Cadastrar Funcionario',
            icon:'pi pi-plus',
            url:'/usuario/cadastrar'
          },
          {
            label:'Listar Funcionarios',
            icon:'pi pi-plus',
            url:'/usuario/listar'
          }],          
        },
        {
          separator:true
        },
        {
          label:'Dashboard',
          items:[
            {
            label:'Informações de Centro de Custos',
            icon:'pi pi-plus',
            url:'/dashboard'
          }],          
        }
      ]

    }
}
