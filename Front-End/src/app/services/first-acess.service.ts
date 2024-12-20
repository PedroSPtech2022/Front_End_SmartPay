import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { Center_Cost } from '../interface/interface-center-cost';
import { First_Acess, User_Exec } from '../interface/interface-first-acess';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstAcessService {

  private apiUrl = `http://54.197.45.43:8080/api/v1/`

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

  registryUser(acess_first:First_Acess): Promise<any>{
    const end_point = this.apiUrl + 'register';
    const headers = this.getHeaders();
    return this.http.post(end_point,acess_first,{ headers: headers, observe: 'response' }).toPromise().then( res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

  createCostCenter(cost_center: Center_Cost): Promise<any>{
    const end_point = this.apiUrl + 'cost-centers';
    const headers = this.getHeaders();
    return this.http.post(end_point,cost_center,{ headers: headers, observe: 'response' }).toPromise().then( res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

  registryUserExec(user:User_Exec): Promise<any>{
    const end_point = this.apiUrl + 'register-executive/' + this.getNumberCenterCost();
    const headers = this.getHeaders();
    return this.http.post(end_point,user,{ headers: headers, observe: 'response' }).toPromise().then(res => res).catch(error => { console.error('Erro no End-Point',error); throw error});
  }

}
