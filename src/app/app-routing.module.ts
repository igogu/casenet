import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movieList/movieList.component';
import { MovieDetailComponent } from './movieDetail/movieDetail.component';


const routes: Routes = [
  { path: '', redirectTo: 'movieList', pathMatch: 'full' },
  { path: 'movieList', component: MovieListComponent },
  { path: 'movieDetail/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
