import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.css']
})
export class MoviesdetailsComponent implements OnInit {

  constructor(private ss:ServiceService ,private r:ActivatedRoute){}

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;


  ngOnInit(): void {
    let getParamId = this.r.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
   
  }

  getMovie(id:any){
    this.ss.getMovieDetails(id).subscribe(async(result)=>{
      console.log(result,'getmoviedetails#');
      this.getMovieDetailResult = await result;

      // updatetags
      // this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
      // this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
      // this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
   
      // // facebook
      // this.meta.updateTag({property:'og:type',content:"website"});
      // this.meta.updateTag({property:'og:url',content:``});
      // this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
      // this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
      // this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

  });
    
  }
  getVideo(id:any)
  {
    this.ss.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

  getMovieCast(id:any)
  {
    this.ss.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }




}
