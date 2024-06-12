import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Cost_Variable } from '../../../interface/interface-cost-variable';
import { ListCostVariableService } from '../../../services/list-cost-variable.service';

@Component({
  selector: 'app-list-variable-cost',
  templateUrl: './list-variable-cost.component.html',
  styleUrl: './list-variable-cost.component.css'
})
export class ListVariableCostComponent {

    display: boolean = false;
    displayInfo: boolean = false;

    isLoading: boolean = false;
    messageError = "";
    sucessMessage = "";


    costs: Cost_Variable[] = [];
    cost: Cost_Variable = {};

    stats: any[];
    nStats:any;

    constructor(private router: Router, private listCostVariableService: ListCostVariableService){
        this.stats = [
            {label:'Aprovar',value:'desativar'},
            {label:'Desaprovar',value:'ativar'}
        ]
    }

    ngOnInit(){
        this.getCostVariable();
    }

    onGlobalFilter(table:Table, event: Event){
        table.filterGlobal((event.target as HTMLInputElement).value,'contains')
    }

    async getCostVariable(){
        await this.listCostVariableService.getCostVariable().then(list => this.costs = list)
    }

    postSelected(event:any){
        this.nStats = event.value
    }

    openModal(cost:Cost_Variable){
        this.display = true
        this.cost=cost
    }

    openModalInfo(cost:Cost_Variable){
        this.displayInfo = true
        this.cost=cost
    }

    callUpdateCost(){
        console.log(this.cost)
        this.listCostVariableService.patchCost(this.cost).then(res =>{
            if(res.status == 200){
                this.sucessMessage = "Situação do custo variável salva";
                setTimeout(() => {
                    this.sucessMessage = ""; // Limpa a mensagem após 5 segundos
                    window.location.reload(); // Recarrega a página
                }, 5000);
            } else{
                this.messageError = "Erro ao atualizar custo variável";
                setTimeout(() => {
                    this.messageError = ""; // Limpa a mensagem após 5 segundos
                    //window.location.reload(); // Recarrega a página
                }, 2000);
            }
           },
           (error)=>{
             this.messageError = "Erro aoatualizar custo variável";
             setTimeout(() => {
                this.messageError = ""; // Limpa a mensagem após 5 segundos
                //window.location.reload(); // Recarrega a página
            }, 2000);
             this.isLoading = false;
             console.error(error);
           });

    }

}
