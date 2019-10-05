import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movieList/movieList.component';


const routes: Routes = [
  { path: '', redirectTo: 'movieList', pathMatch: 'full' },
  { path: 'movieList', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
