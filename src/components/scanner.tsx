import React from 'react';
import { Dispatch } from "redux";
import { changeToPhotoMode } from "../store/actions";
import { connect } from "react-redux";

enum ScannerStatus {
  Pending = "pending",
  Taken = "taken",
  Error = "error"
}

type ScannerProps = {
  setPhotoMode: () => void
};

type ScannerState = {
    currentStatus: ScannerStatus
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPhotoMode: () => dispatch(changeToPhotoMode())
})

class Scanner extends React.Component<ScannerProps, ScannerState> {
  state: ScannerState = {
    currentStatus: ScannerStatus.Pending
  }
  render() {
    return (
      <div className={`scanner ${this.state.currentStatus}` }>
        <button onClick={this.props.setPhotoMode}>Cancel</button>
      </div>
      );
  }
}

export default connect(null, mapDispatchToProps)(Scanner);