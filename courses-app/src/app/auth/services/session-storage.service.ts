import { Inject, Injectable, InjectionToken, inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  {
      factory: () => {
          const {defaultView} = inject(DOCUMENT);

          if (!defaultView) {
              throw new Error('Window is not available');
          }

          return defaultView;
      },
  },
);
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
