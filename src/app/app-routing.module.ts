import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Moviepage1Component } from './moviepage1/moviepage1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';



const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:'movie',component:Moviepage1Component},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'footer',component:FooterComponent},
  {path:'movie/:id',component:MoviesdetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
