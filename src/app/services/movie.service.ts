import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=cce8e367';

  constructor(private http: HttpClient) {}

  getMovie(title: string, year?: string): Observable<any> {
    let url = `${this.apiUrl}&t=${title}`;
    if (year) {
      url += `&y=${year}`;
    }
    return this.http.get(url);
  }
}