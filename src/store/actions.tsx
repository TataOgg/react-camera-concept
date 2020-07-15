import { CAMERA_MODE, CURRENT_PHOTO, PHOTO_MODE } from "../types";

export interface ChangeToPhotoMode {
  type: PHOTO_MODE
}
export interface ChangeToCameraMode {
  type: CAMERA_MODE
}

export interface SetCurrentPhoto {
  type: CURRENT_PHOTO,
  newPhoto: string
}

export type AppStateAction = ChangeToCameraMode | ChangeToPhotoMode;

export function changeToCameraMode(): ChangeToCameraMode {
  return {
    type: CAMERA_MODE
  }
}


export function changeToPhotoMode(): ChangeToPhotoMode {
  return {
    type: PHOTO_MODE
  }
}

export function setCurrentPhoto(newPhoto: string): SetCurrentPhoto{
  return {
    type: CURRENT_PHOTO,
    newPhoto: newPhoto
  }
}