import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeUser } from '../../interface/interface-employee';
import { ListUserService } from '../../services/list-user.service';
import { Table } from 'primeng/table';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit {

    display: boolean = false;
    displayRegisterUser: boolean = false;

    employees: Employee[]=[];
    employee: Employee = {};
    employeeUser: EmployeeUser = {};
    stats: any[];
    nStats: any;
    types_user: any[];

    constructor(private router: Router, private listEmployeeService:ListUserService){
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
        // this.getUsers();
    }

    typeUserRegister(event:any){
        this.types_user = [];
        const type_user = event.value;
        this.employeeUser.type_user = type_user;

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
        const employeeUser = this.employeeUser
        this.listEmployeeService.registryUser(employeeUser).subscribe(response =>{
            if(response.status == 200){
                this.displayRegisterUser = false;
            }else{
                console.log("registro falhou")
            }
        }, error =>{
            console.log(error)
        }
    ) 
    }


}
