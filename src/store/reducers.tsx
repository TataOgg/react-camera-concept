import { AppStateAction, SetCurrentPhoto } from './actions.js'
import { AppState, CAMERA_MODE, Mode, PHOTO_MODE } from "../types";


const initialAppState:AppState = {
  mode: Mode.Photo,
  currentPhoto: null
}
export function ModeReducer(state=initialAppState, action: AppStateAction) {
  switch (action.type) {
    case CAMERA_MODE:
      return {...state, mode: Mode.Scan}
    case PHOTO_MODE:
      return {...state, mode: Mode.Photo}
    default:
      return {...state}
  }
}

export function PhotoReducer(state: AppState, action: SetCurrentPhoto) {
  return {...state, mode: Mode.Photo, currentPhoto: action.newPhoto};
}
