import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    //movies: Array<Movie> = new Array<Movie>(); 
    movies: any;
    constructor(private mv: MovieService) {}
    ngOnInit(): void {
        this.mv.getTopRated().subscribe(res => {
            this.movies = res.results;
        })
    }

    redirect(pagename: string) {
        window.location.href = `/${pagename}`
    }
}
