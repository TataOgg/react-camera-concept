
import { ChangeAppStateAction, SetCurrentPhoto } from '../actions'

import { AppState, Mode } from "../types";
import { CAMERA_MODE, PHOTO_MODE } from "../constants";

const initialAppState:AppState = {
  mode: Mode.Photo,
  currentPhoto: null
}
export function setMode(state=initialAppState, action: ChangeAppStateAction) {
  switch (action.type) {
    case CAMERA_MODE:
      return {...state, mode: Mode.Scan}
    case PHOTO_MODE:
      return {...state, mode: Mode.Photo}
  }
  return state;
}

export function setCurrentPhoto(state: AppState, action: SetCurrentPhoto) {
  return {...state, mode: Mode.Photo, currentPhoto: action.newPhoto};
}
