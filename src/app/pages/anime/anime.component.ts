import { Component } from '@angular/core';
import { AnimeAPIServiceService } from 'src/app/service/anime-apiservice.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  constructor(private service3:AnimeAPIServiceService) {}

 
  trendingAnimeResult: any = [];

  ngOnInit(): void {

    this.trendingAnimeData();
   
  }

  trendingAnimeData() {
    this.service3.trendingAnimeApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingAnimeResult = result.results;
      // this.trendingMovieResult
    });
  }

  
}
