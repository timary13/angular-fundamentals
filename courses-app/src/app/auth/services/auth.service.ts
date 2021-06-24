import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from 'src/dto';
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
    this.http.post<{ result: string }>('http://localhost:3000/login', user)
      .pipe(map((data) => data.result))
      .subscribe(
        (token) => {
          this.sessionStorageService.setToken(token);
          this.isAuthorized$$.next(true);
        },
        (error) => {},
      );
  }

  public logout() {
    this.http.delete<{ result: string }>('http://localhost:3000/logout')
      .subscribe(
        () => {
          this.sessionStorageService.deleteToken();
          this.isAuthorized$$.next(false);
        }
      );
  }

  public register(user: IUser) {
    this.http.post<{ result: string }>('http://localhost:3000/register', user)
      .pipe(map((data) => data.result));
  }
}
