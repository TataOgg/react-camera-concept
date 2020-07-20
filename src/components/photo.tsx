import React from 'react';
import { connect } from "react-redux";
import { CurrentPhoto } from "../types.js";
import { Dispatch } from "redux";
import { changeToCameraMode } from "../store/actions";
import styles from "./photo.module.css"
type PhotoProps = {
  currentPhoto: CurrentPhoto,
  setCameraMode: () => void
};


const mapStateToProps = (state: any) => {
  return {
    currentPhoto: state.PhotoReducer.currentPhoto
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCameraMode: () => dispatch(changeToCameraMode())
})

function renderPhoto(props: PhotoProps){
  if(!props.currentPhoto.photo) {
    return <div className={styles.empty}>
      <button className="primary-button" onClick={props.setCameraMode}>Take picture</button>
    </div>
  }
}
class Photo extends React.Component<PhotoProps> {

  render() {
    return (
      <div className="photo-menu">
        {renderPhoto(this.props)}
      </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);