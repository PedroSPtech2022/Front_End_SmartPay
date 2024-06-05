import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Employee, EmployeeUser } from '../interface/interface-employee';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListUserService {

  private apiUrl = `${enviroment.apiUrl}/custoFixo`

  list: Employee[] = [];

  constructor(private http:HttpClient) { }

  private getToken(){
      const token = localStorage.getItem("token");
      return token ? token.toString():"";
  }

  private getHeaders(): HttpHeaders{
      const token = this.getToken();
      return new HttpHeaders({
          'BearerToken':`${token}`,
          'Content-Type':'application/json'
      })
  }

  async updateEmployeeList(){
      this.list = await this.getEmployeeDist();
  }

  getEmployee(){ 
      let url = `${this.apiUrl}/list`;
      const headers = this.getHeaders();

      return this.http.get<Employee[]>(url, { headers }).toPromise().then(res => res as any).then(data => {return data;})
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
