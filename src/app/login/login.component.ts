import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../adminServices/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastrServiceService } from '../toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb:FormBuilder, private as:AdminService,private route:Router,private toastr:ToastrServiceService){}
  loginFormModel=this.fb.group({
    email:["",[Validators.required,Validators.pattern('^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$')]],
    psw:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]]
  })

  login(){
    var path=this.loginFormModel.value
    // console.log(path.email);
    // console.log(path.psw);
    var email=path.email
    var psw=path.psw
    this.as.loginApi().subscribe((data:any)=>{
      console.log(data[0]);
      var admin_email=data[0].email
      var admin_psw=data[0].password
      if(email==admin_email){
        if(psw==admin_psw){
          localStorage.setItem("admin",JSON.stringify(data[0]))
          this.toastr.showSuccess("Login Success")
          this.route.navigateByUrl("/home")

        }
        else{
          this.toastr.showError("Incorrect Password")
        }

      }
      else{
        this.toastr.showError("Incorrect Email")
      }

      
    })
    
    
  }
}
