import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Center_Cost } from '../interface/interface-center-cost';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Employee } from '../interface/interface-employee';

@Injectable({
  providedIn: 'root'
})

export class RegistryEmployeeService {

  private apiUrl = `${enviroment.apiUrl}/v1`

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Content-Type':'application/json'
      })
  }

  registryEmployees(employee_registry:Employee):Promise<any>{
    const end_point = this.apiUrl + 'employees';
    const headers = this.getHeaders();
    return this.http.post(end_point,employee_registry,{headers}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

}