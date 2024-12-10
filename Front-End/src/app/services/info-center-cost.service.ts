import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { enviroment } from '../enviroments/enviroment';
import { Center_Cost, Health_Center } from '../interface/interface-center-cost';

@Injectable({
  providedIn: 'root'
})

export class InfoCenterCostService {

  private apiUrl = `http://54.91.7.234:8080/api/v1`

  list: Health_Center[] = [];

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

    getCenterCost(){ 
        let url = this.apiUrl + '/cost-center/' + this.getNumberCenterCost();
        const headers = this.getHeaders();
        return this.http.get<Center_Cost>(url, { headers }).toPromise().then(res => res as any);
    }

    getCenterCostInfosHealth(){ 
      let url = this.apiUrl + '/variable-expense/' + this.getNumberCenterCost();
      const headers = this.getHeaders();
      return this.http.get<Center_Cost>(url, { headers }).toPromise().then(res => res as any);
    }

  async getEmployeeDist(){
    this.list = [];
    const health_Center = await this.getCenterCostInfosHealth();
    const jsonArray = JSON.parse(health_Center) as Array<{ type_variable: string, value: number,category: string, payment_method: string, cost_center_name: string,area_name: string,value_total: number}>
    for(const userKey of jsonArray){
        this.list.push(userKey)
    }
    return this.list
  }
}
