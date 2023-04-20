import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const _api = "https://api.themoviedb.org/3/movie/top_rated?api_key=c1e1ddae2640ab4a1a424b63a7c05ffa&language=en-US&page=1";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

//   getTopRated(): Observable<Array<Movie>> {
//     return this.http.get<Array<Movie>>(_api);
//   }
getTopRated(): Observable<any> {
    return this.http.get<any>(_api);
  }
}
