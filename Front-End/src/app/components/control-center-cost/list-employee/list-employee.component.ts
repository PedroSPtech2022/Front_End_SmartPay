import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeUser } from '../../../interface/interface-employee';
import { ListEmployeeService } from '../../../services/list-employee.service';
import { Table } from 'primeng/table';
import { HttpResponse } from '@angular/common/http';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {

    display: boolean = false;
    displayRegisterUser: boolean = false;

    isLoading: boolean = false;
    messageError = "";
    sucessMessage = "";

    employees: Employee[]=[];
    employee: Employee = {};
    employeeUser: EmployeeUser = {};
    stats: any[];
    nStats: any;
    types_user: any[];

    constructor(private router: Router, private listEmployeeService:ListEmployeeService){
        this.stats = [
            {label:'Desativar',value:'desativar'},
            {label:'Ativar',value:'ativar'}
        ]
        this.types_user = [
            {label:'Funcionário',value:'FUNC'},
            {label:'Executivo',value:'EXEC'}
        ]
    }

    ngOnInit(){
        this.getUsers();
    }

    typeUserRegister(event:any){
        this.types_user = [];
        const type_user = event.value;
    }

    onGlobalFilter(table:Table, event: Event){
        table.filterGlobal((event.target as HTMLInputElement).value,'contains')
    }

    async getUsers(){
        await this.listEmployeeService.getEmployee().then(list => this.employees = list)
    }

    postSelected(event:any){
        this.nStats = event.value
    }

    openRegisterUser(employee:Employee){
        this.displayRegisterUser = true
        this.employee = employee
    }

    openModalInfo(employee:Employee){
        this.display = true
        this.employee=employee
    }

    callRegistryUser(){
        this.employeeUser.name =  this.employee.name
        this.employeeUser.email =  this.employee.email
        console.log(this.employeeUser)
        this.listEmployeeService.registryUser(this.employeeUser).then(res =>{
            if(res.status == 201){
                const senha = res.body.password_employee
                this.sucessMessage = "Senha de primeiro acesso para o funcionário:" +  senha;
                setTimeout(() => {
                    this.sucessMessage = ""; // Limpa a mensagem após 5 segundos
                    // window.location.reload(); // Recarrega a página
                }, 7000);
            } else{
                this.messageError = "Erro ao tentar cadastrar acesso";
                setTimeout(() => {
                    this.messageError = ""; // Limpa a mensagem após 5 segundos
                    window.location.reload(); // Recarrega a página
                }, 2000);
            }
           },
           (error)=>{
             this.messageError = "Erro ao cadastrar acesso";
             setTimeout(() => {
                this.messageError = ""; // Limpa a mensagem após 5 segundos
                window.location.reload(); // Recarrega a página
            }, 2000);
             this.isLoading = false;
             console.error(error);
           });
    }

}
