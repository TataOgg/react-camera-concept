import { AppState } from "../types";
import * as actions from "../actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import App from "../App";
import { ChangeAppStateAction } from "../actions";


export function mapStateToProps({mode, currentPhoto}: AppState) {
  return {
    mode, currentPhoto
  }
}

export function mapDispatchToProps(dispatch: Dispatch<ChangeAppStateAction>) {
  return {
    setCurrentPhoto: (newPhoto: string) => dispatch(actions.setCurrentPhoto(newPhoto)),
    setCameraMode: dispatch(actions.changeToCameraMode()),
    setPhotoMode: dispatch(actions.changeToPhotoMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)