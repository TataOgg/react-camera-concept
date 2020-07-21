import { AppStateAction, PhotoAction } from './actions.js'
import {
  AppState,
  CAMERA_MODE,
  Mode,
  NEW_PHOTO,
  NEW_PHOTO_STATUS,
  PHOTO_MODE,
  PhotoStatus
} from "../types";


const initialAppState: AppState = {
  mode: Mode.Photo,
  currentPhoto: {
    photo: null,
    status: PhotoStatus.Pending
  }
}

export function ModeReducer(state = initialAppState, action: AppStateAction) {
  switch (action.type) {
    case CAMERA_MODE:
      return {...state, mode: Mode.Scan}
    case PHOTO_MODE:
      return {...state, mode: Mode.Photo}
    default:
      return state
  }
}

export function PhotoReducer(state = initialAppState, action: PhotoAction) {
  switch (action.type) {
    case NEW_PHOTO:
      return {
        ...state,
        currentPhoto:
          {
            photo: action.newPhoto, status: PhotoStatus.Pending
          }
      }
    case NEW_PHOTO_STATUS:
      return {
        currentPhoto: {
          ...state.currentPhoto,
          status: action.newPhotoStatus
        }
      }
    default:
      return state
  }
}
