import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './pages/series-details/series-details.component';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieAPIServiceService } from './service/movie-apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SeriesComponent,  
    AnimeComponent,
    SearchComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    AnimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [MovieAPIServiceService, SeriesDetailsComponent, AnimeDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
