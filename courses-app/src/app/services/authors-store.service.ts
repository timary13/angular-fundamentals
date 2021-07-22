import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { IAuthor } from 'src/dto';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private authors$$: BehaviorSubject<IAuthor[]> = new BehaviorSubject<IAuthor[]>([]);

  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();
  public authors$: Observable<IAuthor[]> = this.authors$$.asObservable();

  constructor(private authorService: AuthorsService) { 
    this.getAll();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public getAll(): void {
    this.isLoading$$.next(true);
    const subscription = this.authorService.getAll()
      .subscribe((data) => {
        this.authors$$.next(data);
        this.isLoading$$.next(false);
      });
    this.subscriptions.add(subscription);
  }

  public addAuthor(authorName: string) {
    this.isLoading$$.next(true);
    const subscription = this.authorService.addAuthor(authorName)
      .subscribe((data) => {
        this.authors$$.getValue().push({name: authorName});
        this.getAll();
      });
    this.subscriptions.add(subscription);
  }
}
