import { combineReducers } from "redux";
import { auth } from "./auth";


export const reducer = combineReducers({
    auth
})

export type RootType = ReturnType<typeof reducer>