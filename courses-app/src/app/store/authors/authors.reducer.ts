import { Action, createReducer, on } from "@ngrx/store";
import { IAuthor } from "src/dto";
import { fromAuthorActions } from "./authors.actions";

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
    authors: IAuthor[];
    addedAuthor: IAuthor;
}

export const initialAuthorsState: AuthorsState = {
    authors: [],
    addedAuthor: null
}

const reducer = createReducer<AuthorsState>(
    initialAuthorsState,
    on(fromAuthorActions.requestAuthors,  (state: AuthorsState) => ({...state})),
    on(fromAuthorActions.requestAuthorsSuccess,  (state: AuthorsState, { payload }) => ({
        ...state,
        authors: payload.authors
    })),
    on(fromAuthorActions.requestAuthorsFail,  (state: AuthorsState) => ({...state})),
    on(fromAuthorActions.requestAddAuthor,  (state: AuthorsState, { payload }) => ({...state})),
    on(fromAuthorActions.requestAddAuthorSuccess,  (state: AuthorsState, { payload }) => ({
        ...state,
        addedAuthor: payload.author
    })),
    on(fromAuthorActions.requestAddAuthorFail,  (state: AuthorsState) => ({...state})),
    on(fromAuthorActions.resetAddedAuthor,  (state: AuthorsState) => ({...state})),
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);