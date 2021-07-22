import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { IAuthor } from 'src/dto';
import { HOST } from 'src/env.config';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<{result: IAuthor[]}>(`${HOST}/authors/all`)
      .pipe(map(data => data.result));
  }

  public addAuthor(authorName: string) {
    return this.http.post(`${HOST}/authors/add`, authorName);
  }
}
