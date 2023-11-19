import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { SeriesComponent } from './pages/series/series.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './pages/series-details/series-details.component';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';

const routes: Routes = [
  {path:'', component:MoviesComponent},
  {path:'series', component:SeriesComponent},
  {path:'anime', component:AnimeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id', component:MovieDetailsComponent},
  {path:'series/:id', component:SeriesDetailsComponent},
  {path:'anime/:id', component:AnimeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
