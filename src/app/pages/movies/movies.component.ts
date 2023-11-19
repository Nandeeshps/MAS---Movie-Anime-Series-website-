import { Component, OnInit } from '@angular/core';
import { MovieAPIServiceService } from 'src/app/service/movie-apiservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor(private service:MovieAPIServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  crimeMovieResult: any = [];
  animationMovieResult: any = [];
  dramaMovieResult: any = [];
  familyMovieResult: any = [];
  comedyMovieResult: any = [];
  fantasyMovieResult: any = [];
  historyMovieResult: any = [];
  horrorMovieResult: any = [];
  musicMovieResult: any = [];
  mystreyMovieResult: any = [];
  romanceMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  tvMovieResult: any = [];
  thrillerMovieResult: any = [];
  warMovieResult: any = [];
  westernMovieResult: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.crimeMovie();
    this.animationMovie();
    this.dramaMovie();
    this.familyMovie();
    this.comedyMovie();
    this.fantasyMovie();
    this.historyMovie();
    this.horrorMovie();
    this.musicMovie();
    this.mystreyMovie();
    this.romanceMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.tvMovie();
    this.thrillerMovie();
    this.warMovie();
    this.westernMovie();
  }


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  crimeMovie() {
    this.service.fetchCrimeMovies().subscribe((result) => {
      this.crimeMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  dramaMovie() {
    this.service.fetchDramaMovies().subscribe((result) => {
      this.dramaMovieResult = result.results;
    });
  }

  familyMovie() {
    this.service.fetchFamilyMovies().subscribe((result) => {
      this.familyMovieResult = result.results;
    });
  }

  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  fantasyMovie() {
    this.service.fetchFantasyMovies().subscribe((result) => {
      this.fantasyMovieResult = result.results;
    });
  }

  historyMovie() {
    this.service.fetchHistoryMovies().subscribe((result) => {
      this.historyMovieResult = result.results;
    });
  }

  horrorMovie() {
    this.service.fetchHorrorMovies().subscribe((result) => {
      this.horrorMovieResult = result.results;
    });
  }

  musicMovie() {
    this.service.fetchMusicMovies().subscribe((result) => {
      this.musicMovieResult = result.results;
    });
  }

  mystreyMovie() {
    this.service.fetchMysteryMovies().subscribe((result) => {
      this.mystreyMovieResult = result.results;
    });
  }

  romanceMovie() {
    this.service.fetchRomanceMovies().subscribe((result) => {
      this.romanceMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  tvMovie() {
    this.service.fetchTVMovies().subscribe((result) => {
      this.tvMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

  warMovie() {
    this.service.fetchWarMovies().subscribe((result) => {
      this.warMovieResult = result.results;
    });
  }

  westernMovie() {
    this.service.fetchWesternMovies().subscribe((result) => {
      this.westernMovieResult = result.results;
    });
  }

}



