import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }
  getFilm():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/discover/movie?api_key=19c76f2351699e4dacf058f0b99f5eaf&language=fr-FR&sort_by=popularity.desc&page=5')
    .pipe(
      tap(data => data)
    )
  }
  getFilmByName(name): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+name+'?api_key=19c76f2351699e4dacf058f0b99f5eaf&language=fr-FR')
    .pipe(
      tap(data => data)
    )
  }
  
}