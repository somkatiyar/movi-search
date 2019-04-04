import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

export enum SearchType {
  all = "",
  movies = "movies",
  series = "series",
  episode = "episode"
}
@Injectable({
  providedIn: "root"
})
export class MovieService {
  url = "http://www.omdbapi.com/";
  apiKey = "e9c3d210";

  constructor(private http: HttpClient) {}

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }



  getDetails(id) {
    console.log(id)
    let data = `${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`;
console.log(data,'data')
    let final =data.replace(/\s/g, "");
    console.log(final,'datafinal')
    return this.http.get(final);
  }
}

