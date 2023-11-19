import { Component, OnInit } from '@angular/core';
import { SeriesAPIServiceService } from 'src/app/service/series-apiservice.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  constructor(private serviceSeries: SeriesAPIServiceService){}

  bannerSeriesResult: any = [];
  trendingSeriesResult: any = [];
  actionSeriesResult: any = [];
  crimeSeriesResult: any = [];
  animationSeriesResult: any = [];
  comedySeriesResult: any = [];
  documentarySeriesResult: any = [];
  sciencefictionSeriesResult: any = [];
  thrillerSeriesResult: any = [];
  familySeriesResult: any = [];
  kidsSeriesResult: any = [];
  newsSeriesResult: any = [];
  realitySeriesResult: any = [];
  warSeriesResult: any = [];
  westernSeriesResult: any = [];


  ngOnInit(): void {
    this.bannerSeriesData();
    this.trendingSeriesData();
    this.actionSeries();
    this.crimeSeries();
    this.familySeries();
    this.comedySeries();
    this.animationSeries();
    this.kidsSeries();
    this.documentarySeries();
    this.newsSeries();
    this.realitySeries();
    this.sciencefictionSeries();
    this.thrillerSeries();
    this.warSeries();
    this.westernSeries();
  }

  bannerSeriesData() {
    this.serviceSeries.bannerApiDataSeries().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerSeriesResult = result.results;
    });
  }

  trendingSeriesData() {
    this.serviceSeries.trendingMovieApiDataSeries().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingSeriesResult = result.results;
      // this.trendingMovieResult
    });
  }

  // action 
  actionSeries() {
    this.serviceSeries.fetchActionSeries().subscribe((result) => {
      this.actionSeriesResult = result.results;
    });
  }




  // adventure 
  crimeSeries() {
    this.serviceSeries.fetchCrimeSeries().subscribe((result) => {
      this.crimeSeriesResult = result.results;
    });
  }

  familySeries(){
    this.serviceSeries.fetchFamilySeries().subscribe((result) => {
      this.familySeriesResult = result.results;
    });
  }

  kidsSeries(){
    this.serviceSeries.fetchKidsSeries().subscribe((result) => {
      this.kidsSeriesResult = result.results;
    });
  }
  newsSeries(){
    this.serviceSeries.fetchNewsSeries().subscribe((result) => {
      this.newsSeriesResult = result.results;
    });
  }
  realitySeries(){
    this.serviceSeries.fetchRealitySeries().subscribe((result) => {
      this.realitySeriesResult = result.results;
    });
  }
  warSeries(){
    this.serviceSeries.fetchWarSeries().subscribe((result) => {
      this.warSeriesResult = result.results;
    });
  }
  westernSeries(){
    this.serviceSeries.fetchWesternSeries().subscribe((result) => {
      this.westernSeriesResult = result.results;
    });
  }

  // animation 
  animationSeries() {
    this.serviceSeries.fetchAnimationSeries().subscribe((result) => {
      this.animationSeriesResult = result.results;
    });
  }


  // comedy 
  comedySeries() {
    this.serviceSeries.fetchComedySeries().subscribe((result) => {
      this.comedySeriesResult = result.results;
    });
  }

  // documentary 
  documentarySeries() {
    this.serviceSeries.fetchDocumentarySeries().subscribe((result) => {
      this.documentarySeriesResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionSeries() {
    this.serviceSeries.fetchScienceFictionSeries().subscribe((result) => {
      this.sciencefictionSeriesResult = result.results;
    });
  }

  // thriller
  thrillerSeries() {
    this.serviceSeries.fetchThrillerSeries().subscribe((result) => {
      this.thrillerSeriesResult = result.results;
    });
  }


}
