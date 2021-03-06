import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from 'src/dto';
import { HOST } from 'src/env.config';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> = this.isAuthorized$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
  ) {}

  public login(user: { email: string; password: string; }) {
    return this.http.post<{ result: string }>(`${HOST}/login`, user)
      .pipe(
        map((data) => data.result),
        tap((token) => {
          this.sessionStorageService.setToken(token);
          this.isAuthorized$$.next(true);
        })
      );
  }

  public logout() {
    this.http.delete<{ result: string }>(`${HOST}/logout`)
      .subscribe(
        () => {
          this.sessionStorageService.deleteToken();
          this.isAuthorized$$.next(false);
        }
      );
  }

  public register(user: IUser) {
    this.http.post<{ result: string }>(`${HOST}/register`, user)
      .pipe(map((data) => data.result));
  }
}
