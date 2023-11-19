import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieAPIServiceService } from 'src/app/service/movie-apiservice.service';
import { SeriesAPIServiceService } from 'src/app/service/series-apiservice.service';
import { AnimeAPIServiceService } from 'src/app/service/anime-apiservice.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service5:MovieAPIServiceService, private service6:SeriesAPIServiceService,private service7:AnimeAPIServiceService ,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null),
    'seriesName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service5.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
      this.service6.getSearchSeries(this.searchForm.value).subscribe((result)=>{
        console.log(result,'searchmovie##');
        this.searchResult = result.results;
    });

  //   this.service7.getSearchAnime(this.searchForm.value).subscribe((result)=>{
  //     console.log(result,'searchmovie##');
  //     this.searchResult = result.results;
  // });
  }
}