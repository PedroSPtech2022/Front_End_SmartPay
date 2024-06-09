import { Component } from '@angular/core';
import { Cost_Variable } from '../../../interface/interface-cost-variable';
import { Router } from '@angular/router';
import { ListUserService } from '../../../services/list-user.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-employee-list-variable-cost',
  templateUrl: './employee-list-variable-cost.component.html',
  styleUrl: './employee-list-variable-cost.component.css'
})
export class EmployeeListVariableCostComponent {

    display: boolean = false;
    displayInfo: boolean = false;

    costs: Cost_Variable[] = [];
    cost: Cost_Variable = {};

    stats: any[];
    nStats:any;

    methodsPay: any[];
    nMethodsPay: any;

    categorys: any[];
    nCategorys: any;

    constructor(private router: Router, private listUserService:ListUserService){
        this.stats = [
            {label:'Aprovar',value:'desativar'},
            {label:'Desaprovar',value:'ativar'}
        ];

        this.methodsPay = [
            {label:'Cartão de credito',value:'credito'},
            {label:'Cartão de debito',value:'debito'},
            {label:'PIX',value:'pix'}
        ];

        this.categorys = [
            {label:'Certificação',value:'certificacao'},
            {label:'Transporte',value:'transporte'},
            {label:'Outros',value:'outros'}
        ];
    }

    ngOnInit(){
        // this.getUsers();
    }

    onGlobalFilter(table:Table, event: Event){
        table.filterGlobal((event.target as HTMLInputElement).value,'contains')
    }

    async getUsers(){
        await this.listUserService.getEmployee().then(list => this.costs = list)
    }

    postSelected(event:any){
        this.nStats = event.value
    }

    openModal(cost:Cost_Variable){
        this.displayInfo = true
        this.cost=cost
    }

    registryCost(){
        
    }

    openRegistryCost(){
        this.display = true;
    }
}
