import { combineReducers } from "redux";
import { auth } from "./auth";
import { articles } from "./articles";


export const reducer = combineReducers({
    auth,
    articles
})

export type RootType = ReturnType <typeof reducer>