import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editView:boolean=false
  adminData:any={}
  adminUsername=""
  adminEmail=""
  adminPassword=""
  profilePic:any="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"

  constructor(private as:AdminService , private route:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("admin")){
      this.adminData=JSON.parse(localStorage.getItem("admin") || "")
      this.adminUsername=this.adminData.email.slice(0,this.adminData.email.indexOf('@'));
      this.adminEmail=this.adminData.email
      this.adminPassword=this.adminData.password
      // console.log(this.adminUsername);
      if(this.adminData.profile!=""){
        this.profilePic=this.adminData.profile
      }
      
    }
  }

  update(){
    this.editView=true
  }
  cancel(){
    this.editView=false

  }
  getFile(event:any){
    let file=event.target.files[0]
    console.log(file);
    let fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log((event.target.result));
      this.profilePic=event.target.result
      this.adminData.profile=event.target.result
      console.log(this.adminData);
      
      
    }
    
  }

  save(){
    if(this.adminData.email!="" && this.adminData.password!=""){
      this.as.editProfileApi(this.adminData).subscribe((result:any)=>{
        localStorage.setItem("admin",JSON.stringify(result))
        this.cancel()
      })

    }
    else{
      alert("fill all fieds")
    }
  }

  logout(){
    localStorage.removeItem("admin")
    this.route.navigateByUrl('/login')

  }

}
