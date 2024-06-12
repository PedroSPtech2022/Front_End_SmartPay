import { Component } from '@angular/core';
import { Employee } from '../../../interface/interface-employee';
import { Router } from '@angular/router';
import { RegistryEmployeeService } from '../../../services/registry-employee.service';
@Component({
  selector: 'app-registry-employee',
  templateUrl: './registry-employee.component.html',
  styleUrl: './registry-employee.component.css'
})
export class RegistryEmployeeComponent {

  employee: Employee = {};
  messageError = "";
  isLoading = false;

  constructor(private router: Router, private registryEmployeeService: RegistryEmployeeService){}

  finishRegistry(){
    
    var id_cost_centers_str = sessionStorage.getItem('id_cost_center');
    if (id_cost_centers_str !== null) {
      var id_cost_centers_int = parseInt(id_cost_centers_str, 10);
      if (!isNaN(id_cost_centers_int)) {
        this.employee.fk_cost_center = id_cost_centers_int
      } else {
          console.error("Não foi possível converter o valor para um número inteiro.");
      }
        } else {
          console.error("A chave 'id_cost_center' não existe no armazenamento de sessão.");
    }
    this.employee.salary = 20000
    console.log(this.employee)
    this.registryEmployeeService.registryEmployees(this.employee).then(res =>{
      if(res.status == 201){
        this.router.navigateByUrl('executivo/list-employee')
      } else{
        this.messageError = "Erro ao tentar logar";
        this.isLoading = false;
      }
     });
  }


}
