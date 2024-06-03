import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from "@angular/common/http";
import { User } from '../interface/interface-user';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ListUserService {

  private apiUrl = `${enviroment.apiUrl}/custoFixo`

  list: User[] = [];

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

  async updateUserList(){
      this.list = await this.getUserDist();
  }

  getUser(){ 
      let url = `${this.apiUrl}/list`;
      const headers = this.getHeaders();

      return this.http.get<User[]>(url, { headers }).toPromise().then(res => res as any).then(data => {return data;})
  }

  async getUserDist(){
      this.list = [];
      const users = await this.getUser();
      const jsonArray = JSON.parse(users) as Array<{name:string}>
      for(const userKey of jsonArray){
          this.list.push(userKey)
      }
      return this.list
  }
}
