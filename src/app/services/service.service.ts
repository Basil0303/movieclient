import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  movies:any={
    "jamsheer123":{usid:"123",email:"jamsheer@gmail.com",password:"98765432"},
    "jaseel124":{usid:"124",email:"jamsheer@gmail.com",password:"12345678"},
 
}

 baseurl="https://api.themoviedb.org/3";
 apikey="7069349e2d31d58d66edf5ccf84caad6";



 // --------------TRENDING MOVIES-------
 trendingMovieApiData():Observable<any>
 {
   return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`);  
 }


 //-----------TRENDING TV SERIS-----
 trendingTvApiData():Observable<any>
 {
   return this.http.get(`${this.baseurl}/trending/tv/week?api_key=${this.apikey}`);  
 }
 

 //------------TRENDING PERSON-------------
 trendingPersonApiData():Observable<any>
 {
   return this.http.get(`${this.baseurl}/trending/person/week?api_key=${this.apikey}`);  
 }

 //movie details
 getMovieDetails(data:any):Observable<any>
 {
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
 }
 // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }
 


  register(usid:any,email:any,pswd:any){

    let data={
      usid,
      email,
      pswd
    }

  return  this.http.post("http://localhost:3000/register",data)
   
  }


  login(usid:any,pswd:any){

    let data={
      usid,
      pswd
    }
    return this.http.post("http://localhost:3000/login",data)

    
  }




}