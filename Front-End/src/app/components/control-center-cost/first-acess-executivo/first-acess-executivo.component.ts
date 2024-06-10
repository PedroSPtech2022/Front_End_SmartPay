import { Component, OnInit } from '@angular/core';
import { Center_Cost } from '../../../interface/interface-center-cost';
import { First_Acess, User_Exec } from '../../../interface/interface-first-acess';
import { Router } from '@angular/router';
import { FirstAcessService } from '../../../services/first-acess.service';

@Component({
  selector: 'app-first-acess-executivo',
  templateUrl: './first-acess-executivo.component.html',
  styleUrl: './first-acess-executivo.component.css'
})
export class FirstAcessExecutivoComponent implements OnInit{
  active: number | undefined = 0;

  first_acess: First_Acess = {};

  exec_user: User_Exec = {};

  center_cost: Center_Cost = {};

  producao: any[] | undefined;

  messageError = "";
  isLoading = false;

  selectedTypeProducao: any = {};

  statusRegistryUser = false;
  statusRegistryCenterCost = false;
  statusRegistryUserExec = false;

  constructor(private router: Router, private firstAcessService:FirstAcessService) { }

  ngOnInit() {
      this.producao = [
          { tipo: 'Produtivo', value: 'PRODUTIVO' },
          { tipo: 'Não Produtivo', value: 'Não Produtivo' }
      ];
  }

  selectedTypeProd(type:string){
    this.center_cost.type_cost_center = type;
  }

  finishRegistry(){
    
     this.first_acess.type_user = "EXEC"
     this.exec_user.name = this.first_acess.name
     this.exec_user.email = this.first_acess.email
     console.log(this.center_cost)
     console.log(this.first_acess)
     console.log(this.exec_user)

     this.firstAcessService.registryUser(this.first_acess).then(res =>{
      if(res.status == 201){
        this.statusRegistryUser = true;
      }
     },
     (error)=>{
       this.messageError = "Erro ao tentar logar";
       this.isLoading = false;
       console.error(error);
     });
    
     this.firstAcessService.createCostCenter(this.center_cost).then(res =>{
      sessionStorage.setItem('id_cost_center',res.body.id_cost_center)  
      if(res.status == 201){
        this.statusRegistryCenterCost = true;
      }
     },
     (error)=>{
       this.messageError = "Erro ao tentar logar";
       this.isLoading = false;
       console.error(error);
     });

     this.firstAcessService.registryUserExec(this.exec_user).then(res =>{
      if(res.status == 201){
        this.statusRegistryUserExec = true;
      }
     },
     (error)=>{
       this.messageError = "Erro ao tentar logar";
       this.isLoading = false;
       console.error(error);
     });

     if(this.statusRegistryCenterCost == true && this.statusRegistryUser == true && this.statusRegistryUserExec == true ){
      this.router.navigateByUrl('login');
     } else{
      this.messageError = "Erro ao tentar logar";
       this.isLoading = false;
     }
  }
}