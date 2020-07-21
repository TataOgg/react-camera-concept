import React from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { changeToPhotoMode, } from "../store/actions";
import styles from './scanner.module.css'
import { PhotoStatus } from "../types";
import Camera from "./camera";


type ScannerProps = {
  setPhotoMode: () => void
  currentStatus: PhotoStatus
};

const mapStateToProps = (state: any) => ({
  currentStatus: state.PhotoReducer.currentPhoto.status
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhotoMode: () => dispatch(changeToPhotoMode()),
})

class Scanner extends React.Component<ScannerProps> {
  render() {
    return (
      <div className={styles.scanner}>
        <div
          className={`${styles.cameraImage} ${styles[this.props.currentStatus]}`}>
          <Camera/>
          {
            this.props.currentStatus === PhotoStatus.Taken &&
            <p className={styles.cameraDetails}>
              <FontAwesomeIcon icon={faCheckCircle}
                               className={`accepted ${styles.icon}`}/>
              <span className={styles.cameraDetailsText}>Picture Taken!</span>
            </p>
          }
        </div>
        <button className={`${styles.cancel}`}
                onClick={this.props.setPhotoMode}>
          Cancel
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)