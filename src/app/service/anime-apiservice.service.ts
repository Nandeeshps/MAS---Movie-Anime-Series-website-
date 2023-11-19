import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeAPIServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.jikan.moe/v4";

  trendingAnimeApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}//anime/{id}/full`);
  }

  // getSearchAnime(data: any): Observable<any> {
  //   console.log(data, 'movie#');

  //   return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  // }

}
