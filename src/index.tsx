import React  from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { setMode, setCurrentPhoto } from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, Reducer } from "redux";
import { AppState, Mode } from "./types";

export const reducers: Reducer = combineReducers({
  setMode: setMode,
  setCurrentPhoto: setCurrentPhoto
})
const appStore = createStore<AppState, any, any, any>(reducers, {
    mode: Mode.Scan,
    currentPhoto: null
})
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
