import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

 base_url="https://chapterchestserver-9zpz.onrender.com"

  constructor(private http:HttpClient) { }
  
  loginApi(){
    return this.http.get(`${this.base_url}/admin`)
  }
  editProfileApi(bodyData:any){

    return this.http.put(`${this.base_url}/admin/1`,bodyData)

  }
}