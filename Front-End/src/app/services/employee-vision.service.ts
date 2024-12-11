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

  private apiUrl = `http://54.197.45.43:8080/api/v1`

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
        'Authorization': 'authorization' 
      })
  }

  private getHeadersPDF(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type':'application/pdf',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authorization' 
    })
}

  private getNumberCenterCost(){
    const numberCenterCost = sessionStorage.getItem("id_cost_center");
    return numberCenterCost ? numberCenterCost.toString():"";
  }
  
  private getNameFunc(){
    const nameFunc = sessionStorage.getItem("name");
    return nameFunc ? nameFunc.toString():"";
  }

  registryCost(registry_cost: Cost_Variable): Promise<any>{
    const end_point = this.apiUrl + '/create-variable-cost/' + this.getNumberCenterCost();
    const headers = this.getHeaders();
    console.log('esse foi o custo que chegou',registry_cost)
    console.log(end_point)
    return this.http.post(end_point,registry_cost,{headers, observe: 'response'}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

  getCostEmployee(){ 
    let url = `${this.apiUrl}/variable-cost/by-employee/` + this.getNameFunc();
    const headers = this.getHeaders();
    return this.http.get<Cost_Variable[]>(url, { headers }).toPromise().then(res => res as any).then(data => {return data;})
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    const headers = this.getHeadersPDF();

    return this.http.put('https://a503by6ri7.execute-api.us-east-1.amazonaws.com/SmartPay/s3-ctdc/centro_de_custo_2024_06_13.pdf',formData,{headers} );
  }

}
