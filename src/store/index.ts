import { type } from "os";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {reducer} from "src/store/reducers";

export const store = createStore(reducer, applyMiddleware(thunk))
