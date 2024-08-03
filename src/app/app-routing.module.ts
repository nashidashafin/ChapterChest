import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:"",component:LandingComponent
    
  },
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"singleView/:id",component:SingleviewComponent},
  {path:"addBook",component:AddBookComponent},
  {path:"editBook/:id",component:EditBookComponent},
  {path:"profile",component:ProfileComponent}

,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
