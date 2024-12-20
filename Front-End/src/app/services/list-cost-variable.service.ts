import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Cost_Variable } from '../interface/interface-cost-variable';

@Injectable({
  providedIn: 'root'
})

export class ListCostVariableService {

  private apiUrl = `http://54.197.45.43:8080/api/v1`

  list: Cost_Variable[] = [];

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'Authorization': 'authorization' 
      })
  }

  private getNumberCenterCost(){
    const numberCenterCost = sessionStorage.getItem("id_cost_center");
    return numberCenterCost ? numberCenterCost.toString():"";
  } 

  async updatCostVariableList(){
      this.list = await this.getCostVariableDist();
  }

  getCostVariable(){ 
      let url = this.apiUrl + '/variable-cost/by-cost-center/' + this.getNumberCenterCost();
      const headers = this.getHeaders();

      return this.http.get<Cost_Variable[]>(url, { headers }).toPromise().then(res => res as any);
  }

  async getCostVariableDist(){
      this.list = [];
      const costsVariables = await this.getCostVariable();
      const jsonArray = JSON.parse(costsVariables) as Array<{obs:string}>
      for(const costKey of jsonArray){
          this.list.push(costKey)
      }
      return this.list
  }

  registryUser(costVariable:Cost_Variable):Promise<any>{
    const headers = this.getHeaders();
    return this.http.post(this.apiUrl,costVariable,{headers, observe: 'response'}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

  patchCost(costVariable:Cost_Variable):Promise<any>{
    const headers = this.getHeaders();
    const end_point = this.apiUrl + '/variable-cost';
    const patchCostC = {
      "variable_type": costVariable.type_variable,
      "date": costVariable.date,
      "responsible": costVariable.responsible,
      "approved": costVariable.approval
    }
    return this.http.patch(end_point,patchCostC,{headers, observe: 'response'}).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }
}
