import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Employee, EmployeeUser } from '../interface/interface-employee';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Cost_Variable } from '../interface/interface-cost-variable';

@Injectable({
  providedIn: 'root'
})

export class ListUserService {

  private apiUrl = `${enviroment.apiUrl}/v1/variable-cost/by-cost-center/1`

  list: Cost_Variable[] = [];

  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'authorization': 'authorization' 
      })
  }

  async updatCostVariableList(){
      this.list = await this.getCostVariableDist();
  }

  getCostVariable(){ 
      let url = this.apiUrl;
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

  registryUser(costVariable:Cost_Variable): Observable<HttpResponse<any>>{
    const headers = this.getHeaders();
    return this.http.post(this.apiUrl,costVariable,{headers, observe: 'response'});
  }
}
