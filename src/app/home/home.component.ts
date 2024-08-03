import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../adminServices/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allBooks:any=[]
  searchData: string = "";

  constructor(private ls:LibraryService){}
  adminData:any={}
  adminUsername=""

  ngOnInit(): void {
    this.getLibraryBooks()
    if(localStorage.getItem("admin")){
      this.adminData=JSON.parse(localStorage.getItem("admin") || "")
      this.adminUsername=this.adminData.email.slice(0,this.adminData.email.indexOf('@'));
      console.log(this.adminUsername);
      
      
    }
  }

  getLibraryBooks(){
    this.ls.getBooksApi().subscribe((result:any)=>{
      // console.log(result);
      this.allBooks=result
      console.log(this.allBooks);
      
      
    })
  }

}
