import React from 'react';
import axios from "axios";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
  changeToPhotoMode,
  setCurrentPhoto,
  setCurrentPhotoStatus
} from "../store/actions";

import { PhotoStatus } from "../types";

import styles from './camera.module.css'


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhotoMode: () => dispatch(changeToPhotoMode()),
  setNewPhoto: (newPhoto: ImageBitmap) => {
    dispatch(setCurrentPhoto(newPhoto))

    axios.post('https://front-exercise.z1.digital/evaluations')
      .then(({data}) => {
          const outcome = data.summary.outcome
          if (outcome === 'Approved') {
            dispatch(setCurrentPhotoStatus(PhotoStatus.Taken))
            setTimeout(() => {
              dispatch(changeToPhotoMode())
            }, 1000)
          } else {
            dispatch(setCurrentPhotoStatus(PhotoStatus.Error))
          }
        }
      )
  }
})

type CameraProps = {
  setNewPhoto: (photo: ImageBitmap) => void,
  setPhotoMode: () => void
}

class Camera extends React.Component<CameraProps> {

  videoDomRef: any = React.createRef()
  canvasDomRef: any = React.createRef()
  videoId: string = 'video'

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(this.handleVideo)
      .catch(this.videoError)
  }

  handleVideo = (stream: MediaStream) => {
    this.videoDomRef.current.srcObject = stream
    const imageCapture = new ImageCapture(stream.getVideoTracks()[0])
    imageCapture.grabFrame().then(
      imageBitmap => {
        this.canvasDomRef.current.getContext('2d').drawImage(imageBitmap, 0, 0)
        this.props.setNewPhoto(imageBitmap)
      }
    )
  }

  videoError = (err: any) => {
    console.log(err.name)
  }

  render() {
    return (
      <div>
        <video id={this.videoId} ref={this.videoDomRef}
               className={styles.capture} hidden/>
        <canvas ref={this.canvasDomRef} className={styles.capture}/>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Camera)