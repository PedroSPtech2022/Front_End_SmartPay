import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Center_Cost } from '../interface/interface-center-cost';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Employee } from '../interface/interface-employee';
import { Cost_Variable } from '../interface/interface-cost-variable';

@Injectable({
  providedIn: 'root'
})

export class EmployeeVisionService {

  private apiUrl = `${enviroment.apiUrl}/v1`

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Content-Type':'application/json'
      })
  }

  registryCost(registry_cost: Cost_Variable): Observable<HttpResponse<any>>{
    const end_point = this.apiUrl + 'employees';
    const headers = this.getHeaders();
    return this.http.post(end_point,registry_cost,{headers, observe: 'response'});
  }

  getCostEmployee(){ 
    let url = `${this.apiUrl}/list`;
    const headers = this.getHeaders();

    return this.http.get<Employee[]>(url, { headers }).toPromise().then(res => res as any).then(data => {return data;})
}

}
