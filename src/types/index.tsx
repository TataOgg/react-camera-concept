
export enum Mode {
  Photo,
  Scan
}
export type AppState = {
  mode: Mode,
  currentPhoto: any
}
