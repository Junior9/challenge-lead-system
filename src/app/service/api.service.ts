import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtp:HttpClient) { }

  get(){
    return this.hhtp.get("https://gorest.co.in/public/v2/users")
  }

  getById(id:string){
    return this.hhtp.get("https://gorest.co.in/public/v2/users/"+id)
  }
}
