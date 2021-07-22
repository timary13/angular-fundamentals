import { Inject, Injectable, InjectionToken, inject } from '@angular/core';

import { WINDOW } from 'src/app/services/window.service';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private storage: Storage;

  constructor(@Inject(WINDOW) private window: Window) {

    this.storage = this.window.sessionStorage;
   }

  public setToken(token: string) {
    this.storage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return this.storage.getItem(TOKEN);
  }

  public deleteToken() {
    this.storage.removeItem(TOKEN);
  }
}
