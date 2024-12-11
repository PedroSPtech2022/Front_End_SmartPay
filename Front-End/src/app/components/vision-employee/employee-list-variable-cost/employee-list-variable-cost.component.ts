import { Component ,ViewChild, ElementRef} from '@angular/core';
import { Cost_Variable } from '../../../interface/interface-cost-variable';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { EmployeeVisionService } from '../../../services/employee-vision.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-employee-list-variable-cost',
  templateUrl: './employee-list-variable-cost.component.html',
  styleUrl: './employee-list-variable-cost.component.css',
  providers: [MessageService]
})
export class EmployeeListVariableCostComponent {

    display: boolean = false;
    displayInfo: boolean = false;
    @ViewChild('fileInput') fileInput: ElementRef | undefined;
    fileToUpload: File | null = null;  

    costdt: { date: string | null } = { date: null }; // Armazena no formato "06;09.2024"
    displayDate: Date | null = null; // Mantém o valor para exibição no calendário

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

    constructor(private router: Router, private employeeVisionService:EmployeeVisionService, private http: HttpClient, private messageService: MessageService){
        this.stats = [
            {label:'Aprovar',value:'desativar'},
            {label:'Desaprovar',value:'ativar'}
        ];

        this.methodsPay = [
            {label:'Cartão de Credito',value:'Cartao Credito'},
            {label:'Cartão de Debito',value:'Cartao Debito'},
            {label:'PIX',value:'Pix'}
        ];

        this.categorys = [
            {label:'Capacitação',value:'Capacitacao'},
            {label:'Transporte',value:'Transporte'},
            {label:'Reembolso',value:'Reembolso'},
            {label:'Outros',value:'Outros'}
        ];
    }

    ngOnInit(){
        this.getCosts();
    }

    // Função para enviar o arquivo ao S3
    onFileSelect(event: any): void {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
        if (file) {
          this.fileToUpload = file;  // Armazena o arquivo
          console.log('Arquivo selecionado:', file); // Verificar no console
        }
      }
    
      // Função para enviar o arquivo ao S3
      onUpload(): void {
        if (!this.fileToUpload) {
          console.log('Nenhum arquivo selecionado');
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, selecione um arquivo para enviar.' });
          return;
        }
    
        const file = this.fileToUpload;
        const fileName = file.name; // Nome do arquivo
        const bucketUrl = 'https://bucket-kaique-raw.s3.amazonaws.com'; 
        const uploadUrl = `${bucketUrl}/${fileName}`; // URL completa para o upload
    
        console.log('URL do upload:', uploadUrl); // Verificar a URL do upload
    
        const headers = new HttpHeaders({
          'Content-Type': file.type,
          'x-amz-acl': 'bucket-owner-full-control',  // ACL para garantir controle total do arquivo
        });
    
        // Realiza a requisição PUT para o S3
        this.http.put(uploadUrl, file, { headers })
          .subscribe(
            response => {
              console.log('Arquivo enviado com sucesso!', response);
              this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Arquivo enviado com sucesso!' });
            },
            error => {
              console.error('Erro ao enviar o arquivo:', error);
              this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha no envio do arquivo.' });
            }
          );
      }

      onDateSelect(event: Date): void {
        // Atualiza a data no formato customizado
        const day = event.getDate().toString().padStart(2, '0');
        const month = (event.getMonth() + 1).toString().padStart(2, '0');
        const year = event.getFullYear();
        this.cost.date = `${year}-${month}-${day}`;
        // Mantém a data como objeto Date no display para exibição
        this.displayDate = event;
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
        this.cost.approval = null;   
        console.log(this.cost.date)
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
                    this.sucessMessage = ""; 
                    window.location.reload(); 
                }, 5000);
            } else{
                this.messageError = "Erro ao tentar cadastrar custo";
                setTimeout(() => {
                    this.messageError = ""; 
                    //window.location.reload(); 
                }, 2000);
            }
           },
           (error)=>{
             this.messageError = "Erro ao cadastrar custo";
             setTimeout(() => {
                this.messageError = ""; 
                //window.location.reload(); 
            }, 2000);
             this.isLoading = false;
             console.error(error);
           });
    }

}
