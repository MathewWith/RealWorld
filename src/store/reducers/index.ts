import { combineReducers } from "redux";
import { articles } from "./articles";
import { auth } from "./auth";
import { user } from "./user";


export const reducer = combineReducers({
    auth,
    articles,
    user
})

export type RootType = ReturnType <typeof reducer>
