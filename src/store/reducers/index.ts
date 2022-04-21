import { combineReducers } from "redux";
import { auth } from "./auth";
import { tags } from "./tags";


export const reducer = combineReducers({
    auth,
    tags
})

export type RootType = ReturnType <typeof reducer>