import { combineReducers, createStore, Reducer } from "redux";
import { ModeReducer, PhotoReducer } from "./reducers";
import { AppState } from "../types";

export const reducers: Reducer = combineReducers({
  ModeReducer, PhotoReducer
})
export const appStore = createStore<AppState, any, any, any>(reducers)
