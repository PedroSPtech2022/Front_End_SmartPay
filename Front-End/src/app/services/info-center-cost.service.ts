import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { enviroment } from '../enviroments/enviroment';
import { Center_Cost } from '../interface/interface-center-cost';

@Injectable({
  providedIn: 'root'
})

export class InfoCenterCostService {

  private apiUrl = `${enviroment.apiUrl}/v1`


  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders{
      return new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'authorization': 'authorization' 
      })
  }

    getCostVariable(){ 
        let url = this.apiUrl + '/cost-center/1';
        const headers = this.getHeaders();

        return this.http.get<Center_Cost>(url, { headers }).toPromise().then(res => res as any);
    }

}
