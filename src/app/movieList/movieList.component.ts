import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'casenet-movie-list',
  templateUrl: './movieList.component.html',
  styleUrls: ['./movieList.component.scss']
})
export class MovieListComponent implements OnInit{

  title = 'Star Wars Titles';
  url = 'https://swapi.co/api/films/';
  films: any[];
  filmsInPage: any[];
  pageSize = 5;
  currentPage = 1;
  lastPage = 1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((films: any) => {
      this.films = films.results;
      this.updatePageFilms();
      this.updateLastPage();
    });
  }

  nextPage() {
    if (this.currentPage < this.lastPage) {
      this.currentPage++;
      this.updatePageFilms();
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageFilms();
    }
  }
  endPage() {
    this.currentPage = this.lastPage;
    this.updatePageFilms();
  }
  firstPage() {
    this.currentPage = 1;
    this.updatePageFilms();
  }
  updatePageFilms() {
    this.filmsInPage = this.films.slice((this.currentPage-1) * this.pageSize, (this.currentPage-1) * this.pageSize + this.pageSize);
  }
  updateLastPage() {
    this.lastPage = Math.ceil(this.films.length / this.pageSize);
  }
}
