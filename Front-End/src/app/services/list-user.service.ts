import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Employee, EmployeeUser } from '../interface/interface-employee';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListUserService {

  private apiUrl = `${enviroment.apiUrl}/v1/employees/by-cost-center/1`

  list: Employee[] = [];

  constructor(private http:HttpClient) { }

  private getToken(){
      const token = localStorage.getItem("token");
      return token ? token.toString():"";
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
      let url = this.apiUrl;
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

  registryUser(employeeUser:EmployeeUser): Observable<HttpResponse<any>>{
    const headers = this.getHeaders();
    return this.http.post(this.apiUrl,employeeUser,{headers, observe: 'response'});
  }
}
