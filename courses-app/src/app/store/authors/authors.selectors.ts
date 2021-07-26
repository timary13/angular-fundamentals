import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";

import { AuthorsState } from "./authors.reducer";

export const selectAuthors = (state: State) => state.authors;

const getAuthors = createSelector(
    selectAuthors,
    (state: AuthorsState) => state.authors
);

const getAddedAuthors = createSelector(
    selectAuthors,
    (state: AuthorsState) => state.addedAuthor
);


export const authorsSelectors = {
    getAuthors,
    getAddedAuthors
}
