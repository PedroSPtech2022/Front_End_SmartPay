import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../interface/interface-employee';
import { ListUserService } from '../../services/list-user.service';
import { Table } from 'primeng/table';
import { Cost_Variable } from '../../interface/interface-cost-variable';

@Component({
  selector: 'app-list-variable-cost',
  templateUrl: './list-variable-cost.component.html',
  styleUrl: './list-variable-cost.component.css'
})
export class ListVariableCostComponent {

    display: boolean = false;

    costs: Cost_Variable[] = [];
    cost: Cost_Variable = {};

    stats: any[];
    nStats:any;

    constructor(private router: Router, private listUserService:ListUserService){
        this.stats = [
            {label:'Aprovar',value:'desativar'},
            {label:'Desaprovar',value:'ativar'}
        ]
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
        this.display = true
        this.cost=cost
    }

}
