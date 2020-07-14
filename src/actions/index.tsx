import * as constants from "../constants";

export interface ChangeToPhotoMode {
  type: constants.PHOTO_MODE
}
export interface ChangeToCameraMode {
  type: constants.CAMERA_MODE
}

export interface SetCurrentPhoto {
  type: constants.CURRENT_PHOTO,
  newPhoto: string
}

export type ChangeAppStateAction = ChangeToCameraMode | ChangeToPhotoMode | SetCurrentPhoto;

export function changeToCameraMode(): ChangeToCameraMode {
  return {
    type: constants.CAMERA_MODE
  }
}


export function changeToPhotoMode(): ChangeToPhotoMode {
  return {
    type: constants.PHOTO_MODE
  }
}

export function setCurrentPhoto(newPhoto: string): SetCurrentPhoto{
  return {
    type: constants.CURRENT_PHOTO,
    newPhoto: newPhoto
  }
}