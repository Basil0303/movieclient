import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Moviepage1Component } from './moviepage1/moviepage1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { ServiceService } from './services/service.service';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Moviepage1Component,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MoviesdetailsComponent,
  

   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
