import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  base_url='https://chapterchestserver-9zpz.onrender.com'
  constructor(private http:HttpClient) { }

  addBooksApi(bodyData:any){
   return this.http.post(`${this.base_url}/library`,bodyData)
  }
  getBooksApi(){
    return this.http.get(`${this.base_url}/library`)
  }
  deleteBookApi(id:any){
    return this.http.delete(`${this.base_url}/library/${id}`)

  }
//edit single view
  getSingleBookApi(id:any){
    return this.http.get(`${this.base_url}/library/${id}`)

  }

  //edit
  editBookApi(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/library/${id}`,bodyData)

  }

}
