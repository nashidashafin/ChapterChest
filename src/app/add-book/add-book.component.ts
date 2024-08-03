import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../adminServices/library.service';
import { ToastrServiceService } from '../toastr.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private fb:FormBuilder, private ls:LibraryService,private toastr:ToastrServiceService){}

  ngOnInit(): void {
    
  }

  AddBookFormModel=this.fb.group({
    title:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9 .\'-]+$')]],
    author:["",[Validators.required,Validators.pattern('^[a-zA-Z .\'-]+$')]],
    genere:["",[Validators.required,Validators.pattern('^[a-zA-Z -]+$')]],
    image:["",[Validators.required,Validators.pattern('^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$')]],
    description:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9 .,!?\':;()\n"”-]+$')]]

  })

  addLibraryBook(){
    if(this.AddBookFormModel.valid){
      var path=this.AddBookFormModel.value
      this.ls.addBooksApi({title:path.title,author:path.author,genere:path.genere,image:path.image,description:path.description}).subscribe((result:any)=>{
        // console.log(result);
        this.toastr.showSuccess(`${result.title} is added.`)
        this.AddBookFormModel.reset()
        
        
      })

    }
    else{
      this.toastr.showError("Fill all fields")
    }
  }
}
