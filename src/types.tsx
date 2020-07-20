export const PHOTO_MODE = 'PHOTO_MODE';
export type PHOTO_MODE = typeof PHOTO_MODE;

export const CAMERA_MODE = 'CAMERA_MODE';
export type CAMERA_MODE = typeof CAMERA_MODE;

export const CURRENT_PHOTO = 'CURRENT_PHOTO';
export type CURRENT_PHOTO = typeof CURRENT_PHOTO;

export const NEW_PHOTO = 'NEW_PHOTO';
export type NEW_PHOTO = typeof NEW_PHOTO;

export const NEW_PHOTO_STATUS = 'NEW_PHOTO_STATUS';
export type NEW_PHOTO_STATUS = typeof NEW_PHOTO_STATUS;

export enum Mode {
  Photo,
  Scan
}


export type CurrentPhoto = {
  photo: string | null,
  status: PhotoStatus
}


export type AppState = {
  mode: Mode,
  currentPhoto: CurrentPhoto
}

export enum PhotoStatus {
  Pending = "pending",
  Taken = "taken",
  Error = "error"
}