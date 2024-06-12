import { Component } from '@angular/core';
import { Cost_Variable } from '../../../interface/interface-cost-variable';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { EmployeeVisionService } from '../../../services/employee-vision.service';

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

    isLoading: boolean = false;
    messageError = "";
    sucessMessage = "";

    stats: any[];
    nStats:any;

    methodsPay: any[];
    nMethodsPay: any;

    categorys: any[];
    nCategorys: any;

    constructor(private router: Router, private employeeVisionService:EmployeeVisionService){
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
        // this.getCosts();
    }

    onGlobalFilter(table:Table, event: Event){
        table.filterGlobal((event.target as HTMLInputElement).value,'contains')
    }

    async getCosts(){
        await this.employeeVisionService.getCostEmployee().then(list => this.costs = list)
    }

    postSelected(event:any){
        this.nStats = event.value
    }

    openModal(cost:Cost_Variable){
        this.displayInfo = true
        this.cost=cost
    }

    openRegistryCost(){
        this.display = true;
    }

    registryCost(){
        // this.cost.value = 2000
        this.cost.date = "2024-06-13"
        this.cost.approval = false;   
        this.cost.responsible = "Ezequiel Leandro";

        var responsible = sessionStorage.getItem('name');
        if (responsible !== null) {
        this.cost.responsible = responsible
        } else {
          console.error("A chave 'id_cost_center' não existe no armazenamento de sessão.");
        }
        this.employeeVisionService.registryCost(this.cost).then(res =>{
            if(res.status == 201){
                this.sucessMessage = "Custo registrado";
                setTimeout(() => {
                    this.sucessMessage = ""; // Limpa a mensagem após 5 segundos
                    //window.location.reload(); // Recarrega a página
                }, 5000);
            } else{
                this.messageError = "Erro ao tentar cadastrar custo";
                setTimeout(() => {
                    this.messageError = ""; // Limpa a mensagem após 5 segundos
                    //window.location.reload(); // Recarrega a página
                }, 2000);
            }
           },
           (error)=>{
             this.messageError = "Erro ao cadastrar custo";
             setTimeout(() => {
                this.messageError = ""; // Limpa a mensagem após 5 segundos
                //window.location.reload(); // Recarrega a página
            }, 2000);
             this.isLoading = false;
             console.error(error);
           });
    }

}
