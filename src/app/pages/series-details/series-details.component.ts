import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesAPIServiceService } from 'src/app/service/series-apiservice.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent {

  constructor(private service2:SeriesAPIServiceService,private router:ActivatedRoute,private title:Title,private meta:Meta) { }
  getSeriesDetailResult:any;
  getSeriesVideoResult:any;
  getSeriesCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getSeries(getParamId);
    this.getVideo(getParamId);
    this.getSeriesCast(getParamId);
  }

  getSeries(id:any){
    this.service2.getSeriesDetails(id).subscribe(async(result)=>{
        console.log(result,'getseriesdetails#');
        this.getSeriesDetailResult = await result;

        // updatetags
        this.title.setTitle(`${this.getSeriesDetailResult.original_title} | ${this.getSeriesDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getSeriesDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getSeriesDetailResult.overview});
     
        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getSeriesDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getSeriesDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getSeriesDetailResult.backdrop_path}`});

    });
  }

  getVideo(id:any)
  {
    this.service2.getSeriesVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getSeriesVideoResult = element.key;
            }
        });

    });
  }

  getSeriesCast(id:any)
  {
    this.service2.getSeriesCast(id).subscribe((result)=>{
      console.log(result,'seriesCast#');
      this.getSeriesCastResult = result.cast;
    });
  }


}
