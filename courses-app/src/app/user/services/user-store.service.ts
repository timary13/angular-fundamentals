import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IUser, UserRole } from 'src/dto';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private isAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private name$$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();
  public name$: Observable<string> = this.name$$.asObservable();

  constructor(private userService: UserService) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public getUser() {
    const subscription = this.userService.getUser()
      .subscribe((user: IUser) => {
        this.name$$.next(user.name);
        const isAdmin = user.role === UserRole.Admin;
        this.isAdmin$$.next(isAdmin);
      });
    this.subscriptions.add(subscription);
  }
}
