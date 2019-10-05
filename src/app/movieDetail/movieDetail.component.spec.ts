import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieDetailComponent } from './movieDetail.component';

describe('MovieDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MovieDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the movieDetail', () => {
    const fixture = TestBed.createComponent(MovieDetailComponent);
    const movieDetail = fixture.debugElement.componentInstance;
    expect(movieDetail).toBeTruthy();
  });

  it(`should have as title 'casenetMovieDetail'`, () => {
    const fixture = TestBed.createComponent(MovieDetailComponent);
    const movieDetail = fixture.debugElement.componentInstance;
    expect(movieDetail.title).toEqual('casenetMovieDetail');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MovieDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('casenetMovieDetail movieDetail is running!');
  });
});
