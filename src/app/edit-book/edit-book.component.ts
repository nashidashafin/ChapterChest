import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../adminServices/library.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
id:any=""
bookInfo:any=""
  constructor(private ar:ActivatedRoute, private ls:LibraryService, private route:Router){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      this.ls.getSingleBookApi(this.id).subscribe((result:any)=>{
        this.bookInfo=result
        console.log(this.bookInfo);
        
      })
      
    })
  }
  update(){
    // console.log(this.bookInfo);
    this.ls.editBookApi(this.id,this.bookInfo).subscribe((data:any)=>{
      this.route.navigateByUrl("/home")
    })
    
  }
}
