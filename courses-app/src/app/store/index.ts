import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "../auth/store/auth.effects";
import * as Auth from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import * as User from "../user/store/user.reducers";

export interface State {
    user: User.UserState;
    auth: Auth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
    [User.userFeatureKey]: User.userReducer,
    [Auth.authFeatureKey]: Auth.authReducer,
};

export const effects = [UserEffects, AuthEffects];