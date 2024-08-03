import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../adminServices/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  allBooks:any={}

constructor(private ar:ActivatedRoute ,private ls:LibraryService,private route:Router){}
ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    console.log(data.id);
    this.ls.getBooksApi().subscribe((result:any)=>{
      this.allBooks=result.find((i:any)=>i.id==data.id)
        console.log(this.allBooks);
        // console.log(result);
        
        
      
      
    })
    
  })
}

deleteLibraryBook(id:any){
  this.ls.deleteBookApi(id).subscribe((result:any)=>{
    console.log(result);
    alert('deleted')
    this.route.navigateByUrl("/home")

    
  })
}

  
}
