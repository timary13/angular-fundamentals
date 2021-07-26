import { ActionReducerMap } from "@ngrx/store";
import { UserEffects } from "../user/store/user.effects";
import { userFeatureKey, userReducer, UserState } from "../user/store/user.reducers";

export interface State {
    user: UserState;
}

export const reducers: ActionReducerMap<State> = {
    [userFeatureKey]: userReducer,
};

export const effects = [UserEffects];