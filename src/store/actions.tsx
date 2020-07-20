import {
  CAMERA_MODE,
  CURRENT_PHOTO,
  NEW_PHOTO, NEW_PHOTO_STATUS,
  PHOTO_MODE,
  PhotoStatus
} from "../types";

export interface ChangeToPhotoMode {
  type: PHOTO_MODE
}
export interface ChangeToCameraMode {
  type: CAMERA_MODE
}

export interface SetCurrentPhoto {
  type: NEW_PHOTO,
  newPhoto: string
}

export interface SetCurrentPhotoStatus {
  type: NEW_PHOTO_STATUS,
  newPhotoStatus: PhotoStatus
}

export interface GetCurrentPhoto {
  type: CURRENT_PHOTO,
}

export type AppStateAction = ChangeToCameraMode | ChangeToPhotoMode;
export type PhotoAction = GetCurrentPhoto | SetCurrentPhoto | SetCurrentPhotoStatus;
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
    type: NEW_PHOTO,
    newPhoto: newPhoto
  }
}

export function setCurrentPhotoStatus(photoStatus: PhotoStatus): SetCurrentPhotoStatus{
  return {
    type: NEW_PHOTO_STATUS,
    newPhotoStatus: photoStatus
  }
}


export function getCurrentPhoto(newPhoto: string): GetCurrentPhoto{
  return {
    type: CURRENT_PHOTO
  }
}