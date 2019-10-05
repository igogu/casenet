import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListComponent } from './movieList.component';

describe('MovieListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MovieListComponent
      ],
    }).compileComponents();
  }));

  it('should create the movieList', () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    const movieList = fixture.debugElement.componentInstance;
    expect(movieList).toBeTruthy();
  });

  it(`should have as title 'casenetMovieList'`, () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    const movieList = fixture.debugElement.componentInstance;
    expect(movieList.title).toEqual('casenetMovieList');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('casenetMovieList movieList is running!');
  });
});
