import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { IAuthor } from 'src/dto';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{result: IAuthor[]}>('http://localhost:3000/authors/all')
      .pipe(map(data => data.result));
  }

  public addAuthor(authorName: string) {
    return this.http.post('http://localhost:3000/authors/add', authorName);
  }
}
