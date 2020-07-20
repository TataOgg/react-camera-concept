import React from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import axios from 'axios'

import {
  changeToPhotoMode,
  setCurrentPhoto,
  setCurrentPhotoStatus
} from "../store/actions";

import styles from './scanner.module.css'
import { PhotoStatus } from "../types";
import Camera from "./camera";


type ScannerProps = {
  setPhotoMode: () => void
  setNewPhoto: (newPhoto: string) => void
  currentStatus: PhotoStatus
};

const mapStateToProps = (state: any) => ({
  currentStatus: state.PhotoReducer.currentPhoto.status
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhotoMode: () => dispatch(changeToPhotoMode()),
  setNewPhoto: (newPhoto: string) => {
    dispatch(setCurrentPhoto(newPhoto));

    axios.post('https://front-exercise.z1.digital/evaluations')
      .then(({data}) => {
          const outcome = data.summary.outcome;
          if (outcome === 'Approved'){
            dispatch(setCurrentPhotoStatus(PhotoStatus.Taken))
          } else {
            dispatch(setCurrentPhotoStatus(PhotoStatus.Error))
          }
        }
      )
  }
})

class Scanner extends React.Component<ScannerProps> {
  render() {
    return (
      <div className={styles.scanner}>
        <div className={`${styles.cameraImage} ${styles[this.props.currentStatus]}`}>
          <button onClick={() => this.props.setNewPhoto('hola')}>Click here to update photo</button>
          <Camera></Camera>
        </div>
        <button className={`${styles.cancel}`} onClick={this.props.setPhotoMode}>
          Cancel
        </button>
      </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);