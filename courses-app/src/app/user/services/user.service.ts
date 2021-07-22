import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from 'src/dto';
import { HOST } from 'src/env.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<IUser> {
    return this.http.get<{result: IUser}>(`${HOST}/users/me`).pipe(map(data => data.result));
  }
}
