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
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
        'authorization': 'authorization' 
      })
  }

  private getNumberCenterCost(){
    const numberCenterCost = sessionStorage.getItem("id_cost_center");
    return numberCenterCost ? numberCenterCost.toString():"";
  } 

  registryCost(registry_cost: Cost_Variable): Promise<any>{
    const end_point = this.apiUrl + '/create-variable-cost/' + this.getNumberCenterCost();
    const headers = this.getHeaders();
    return this.http.post(end_point,registry_cost,{headers, observe: 'response'}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

  getCostEmployee(){ 
    let url = `${this.apiUrl}/list`;
    const headers = this.getHeaders();

    return this.http.get<Cost_Variable[]>(url, { headers }).toPromise().then(res => res as any).then(data => {return data;})
}

}
