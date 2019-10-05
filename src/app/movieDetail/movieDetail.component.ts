import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
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
  characters = [];


  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.url += this.movieId;
    this.http.get(this.url).subscribe((movie: any) => {
      this.movieDetail = movie;
      this.characterInfo(this.movieDetail.characters).subscribe((data: any) => {
          data.forEach(elem => {
            this.characters.push(elem);
          });
        });
    });
  }

  characterInfo(characters: any): Observable<any[]> {
    const observableBatch = [];
    for (const char of characters) {
      observableBatch.push( this.http.get( char ));
    }
    return forkJoin(observableBatch);
  }

  back() {
    this.location.back();
  }
}
