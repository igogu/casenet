import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'casenet-movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.scss']
})
export class MovieListComponent implements OnInit{

  title = 'Star Wars Titles';
  url = 'https://swapi.co/api/films/';
  films: any[]
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((films: any) => {
      this.films = films.results;
      console.log(this.films)});
  }
}
