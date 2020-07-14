import React from 'react';

enum ScannerStatus {
  Pending = "pending",
  Taken = "taken",
  Error = "error"
}

type ScannerState = {
  currentStatus: ScannerStatus
};

function goBackToScan () {

}

class Scanner extends React.Component {
  state: ScannerState = {
    currentStatus: ScannerStatus.Pending
  }
  render() {
    return (
      <div className={`scanner ${this.state.currentStatus}` }>
        <button onClick={goBackToScan}>Cancel</button>
      </div>
      );
  }
}

export default Scanner;