import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesAPIServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "86b2b00964742013b60187456e00634a";

  
  bannerApiDataSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/tv/week?api_key=${this.apikey}`);                          
  }

  trendingMovieApiDataSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/tv/day?api_key=${this.apikey}`);
  }

  getSearchSeries(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/tv?api_key=${this.apikey}&query=${data.seriesName}`);
  }

  getSeriesDetails(data:any): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/${data}?api_key=${this.apikey}`);
  }

  getSeriesVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/${data}/videos?api_key=${this.apikey}`)
  }

  getSeriesCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/${data}/credits?api_key=${this.apikey}`)
  }

  fetchActionSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10759`);
  }

  fetchCrimeSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=80`);
  }

  fetchFamilySeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10751`);
  }

  fetchAnimationSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=16`);
  }

  fetchKidsSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10762`);
  }

  fetchComedySeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=35`);
  }

  fetchDocumentarySeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=99`);
  }

  fetchNewsSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10763`);
  }

  fetchRealitySeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10764`);
  }

  fetchScienceFictionSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&with_genres=10765`);
  }

  fetchThrillerSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=18`);
  }

  fetchWarSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10768`);
  }

  fetchWesternSeries(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=37`);
  }

}
