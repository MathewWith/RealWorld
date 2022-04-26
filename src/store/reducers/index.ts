import { combineReducers } from "redux";
import { articles } from "./articles";
import { auth } from "./auth";


export const reducer = combineReducers({
    auth,
    articles
})

export type RootType = ReturnType <typeof reducer>
