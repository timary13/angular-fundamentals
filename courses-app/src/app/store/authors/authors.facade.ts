import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { State } from "src/app/store";
import { IAuthor } from "src/dto";
import { SessionStorageService } from "../services/session-storage.service";
import { fromAuthActions } from "./auth.actions";
import { authSelectors } from "./auth.selectors";
import { fromAuthorActions } from "./authors.actions";
import { authorsSelectors } from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {
    public addedAuthor$: Observable<IAuthor> = this.store.pipe(select(authorsSelectors.getAddedAuthors));
    public authors$: Observable<IAuthor[]> = this.store.pipe(select(authorsSelectors.getAuthors));

    constructor(private store: Store<State>, private sessionStorage: SessionStorageService) {}

    public getAuthors(): void {
        this.store.dispatch(fromAuthorActions.requestAuthors());
    }

    public addAuthor(author: { authorName: string }): void {
        this.store.dispatch(fromAuthorActions.requestAddAuthor({ payload: {
            authorName: author.authorName
        } }));
    }
}