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
    this.employee.fk_cost_center = 12
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
