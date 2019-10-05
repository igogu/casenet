import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'casenet-movie-detail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.scss']
})
export class MovieDetailComponent implements OnInit{

  title = 'Star Wars Titles';
  url = 'https://swapi.co/api/films/';
  movieId = 0;
  movieDetail: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.url += this.movieId;
    this.http.get(this.url).subscribe((movie: any) => {
      this.movieDetail = movie;
      console.log(movie);
    });
  }

}
