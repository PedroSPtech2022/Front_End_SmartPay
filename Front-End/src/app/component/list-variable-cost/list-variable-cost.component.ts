import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interface/interface-user';
import { ListUserService } from '../../services/list-user.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-variable-cost',
  templateUrl: './list-variable-cost.component.html',
  styleUrl: './list-variable-cost.component.css'
})
export class ListVariableCostComponent {

    display: boolean = false;

    users: User[]=[];
    user: User = {};

    stats: any[];
    nStats:any;

    constructor(private router: Router, private listUserService:ListUserService){
        this.stats = [
            {label:'Desativar',value:'desativar'},
            {label:'Ativar',value:'ativar'}
        ]
    }

    ngOnInit(){
        // this.getUsers();
    }

    onGlobalFilter(table:Table, event: Event){
        table.filterGlobal((event.target as HTMLInputElement).value,'contains')
    }

    async getUsers(){
        await this.listUserService.getUser().then(list => this.users = list)
    }

    postSelected(event:any){
        this.nStats = event.value
    }

    openModal(user:User){
        this.display = true
        this.user=user
    }

}
