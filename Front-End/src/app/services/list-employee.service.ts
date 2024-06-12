import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Employee, EmployeeUser } from '../interface/interface-employee';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListEmployeeService {

  private apiUrl = `${enviroment.apiUrl}/v1`

  list: Employee[] = [];

  constructor(private http:HttpClient) { }

  private getNumberCenterCost(){
      const numberCenterCost = sessionStorage.getItem("id_cost_center");
      return numberCenterCost ? numberCenterCost.toString():"";
  }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'authorization': 'authorization' 
      })
  }

  async updateEmployeeList(){
      this.list = await this.getEmployeeDist();
  }

  getEmployee(){ 
      let url = this.apiUrl + '/employees/by-cost-center/'+ this.getNumberCenterCost();
      const headers = this.getHeaders();

      return this.http.get<Employee[]>(url, { headers }).toPromise().then(res => res as any);
  }

  async getEmployeeDist(){
      this.list = [];
      const employees = await this.getEmployee();
      const jsonArray = JSON.parse(employees) as Array<{name:string}>
      for(const userKey of jsonArray){
          this.list.push(userKey)
      }
      return this.list
  }

  registryUser(employeeUser:EmployeeUser):Promise<any>{
    const end_point = this.apiUrl + '/create-user';
    const headers = this.getHeaders();
    return this.http.post(end_point,employeeUser,{headers, observe: 'response'}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }
}
