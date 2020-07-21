import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CurrentPhoto, PhotoStatus } from "../types";
import { changeToCameraMode } from "../store/actions";
import styles from "./photo.module.css"

type PhotoProps = {
  currentPhoto: CurrentPhoto,
  setCameraMode: () => void,
};


const mapStateToProps = (state: any) => {
  return {
    currentPhoto: state.PhotoReducer.currentPhoto
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCameraMode: () => dispatch(changeToCameraMode())
})

function setPill(status: PhotoStatus) {
  switch (status) {
    case PhotoStatus.Taken:
      return <span className={`${styles.pill} ${styles.accepted}`}>
        <FontAwesomeIcon className={styles.pillIcon} icon={faCheck}/>
        <span className={styles.pillText}>Accepted</span>
      </span>
    case PhotoStatus.Error:
      return <span className={`${styles.pill} ${styles.rejected}`}>
        <FontAwesomeIcon className={styles.pillIcon} icon={faTimes}/>
        <span className={styles.pillText}>Rejected</span>
      </span>
  }
}

function renderPhoto(props: PhotoProps, state: any) {

  if (!props.currentPhoto.photo) {
    return (
      <div className={styles.photoMenu}>
        <img className={styles.empty} src="/id-bg.svg" alt="empty"/>
        <button className="primary-button" onClick={props.setCameraMode}>Take
          picture
        </button>
      </div>
    )
  } else {
    return (
      <div className={styles.photoMenu}>
        <canvas className={styles[props.currentPhoto.status]}
                ref={state.canvasDomRef}/>
        {
          props.currentPhoto.status === PhotoStatus.Error &&
          <button className="primary-button"
                  onClick={props.setCameraMode}>Retake picture</button>
        }
        {setPill(props.currentPhoto.status)}
      </div>
    )
  }
}

class Photo extends React.Component<PhotoProps> {
  state: any = {
    canvasDomRef: React.createRef()
  }

  componentDidMount() {
    if (this.state.canvasDomRef.current) {
      this.state.canvasDomRef.current.getContext('2d')
        .drawImage(this.props.currentPhoto.photo, 0, 0)
    }
  }

  render() {
    return renderPhoto(this.props, this.state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)