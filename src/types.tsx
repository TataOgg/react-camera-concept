export const PHOTO_MODE = 'PHOTO_MODE';
export type PHOTO_MODE = typeof PHOTO_MODE;

export const CAMERA_MODE = 'CAMERA_MODE';
export type CAMERA_MODE = typeof CAMERA_MODE;

export const CURRENT_PHOTO = 'CURRENT_PHOTO';
export type CURRENT_PHOTO = typeof CURRENT_PHOTO;

export enum Mode {
  Photo,
  Scan
}
export type AppState = {
  mode: Mode,
  currentPhoto: any
}
