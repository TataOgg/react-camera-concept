import React from 'react';
import { connect } from "react-redux";
import { AppState } from "../types.js";
import { Dispatch } from "redux";
import { changeToCameraMode } from "../store/actions";

type PhotoProps = {
  currentPhoto: string,
  setCameraMode: () => void
};


const mapStateToProps = (state: AppState) => {
  return {
    currentPhoto: state.currentPhoto
  }
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCameraMode: () => dispatch(changeToCameraMode())
})

function renderPhoto(props: PhotoProps){
  if(!props.currentPhoto) {
    return <div>
      <button onClick={props.setCameraMode}>Take picture</button>
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