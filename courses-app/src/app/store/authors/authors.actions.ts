import { createAction, props } from "@ngrx/store";
import { IAuthor } from "src/dto";

export enum AuthorActions {
    RequestAuthors = '[Author] Request Authors',
    RequestAuthorsSuccess = '[Author] Request Authors Success',
    RequestAuthorsFail = '[Author] Request Authors Fail',
    RequestAddAuthor = '[Author] Request Add Author',
    RequestAddAuthorSuccess = '[Author] Request Add Author Success',
    RequestAddAuthorFail = '[Author] Request Add Author Fail',
    ResetAddedAuthor = '[Author] Reset Added Author',
}

const requestAuthors = createAction(AuthorActions.RequestAuthors);

const requestAuthorsSuccess = createAction(
    AuthorActions.RequestAuthorsSuccess,
    props<{
        payload: {
            authors: IAuthor[];
        }
    }>()
);
const requestAuthorsFail = createAction(AuthorActions.RequestAuthorsFail);
const requestAddAuthor = createAction(
    AuthorActions.RequestAddAuthor,
    props<{
        payload: {
            authorName: string;
        }
    }>()
);
const requestAddAuthorSuccess = createAction(
    AuthorActions.RequestAddAuthorSuccess,
    props<{
        payload: {
            author: IAuthor;
        }
    }>()
);
const requestAddAuthorFail = createAction(AuthorActions.RequestAddAuthorFail);
const resetAddedAuthor = createAction(AuthorActions.ResetAddedAuthor);

export const fromAuthorActions = {
    requestAuthors,
    requestAuthorsSuccess,
    requestAuthorsFail,
    requestAddAuthor,
    requestAddAuthorSuccess,
    requestAddAuthorFail,
    resetAddedAuthor,
}