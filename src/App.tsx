import React from 'react';
import Title from './components/title'
import Scanner from "./components/scanner";
import Photo from "./components/photo";
import { connect } from "react-redux";
import { CurrentPhoto, Mode } from "./types";


function isPhoto(mode: Mode) {
  return mode === Mode.Photo;
}

function PageTitle(props: any) {
  if (isPhoto(props.mode)) {
    return <Title title="Scan your ID"
                  description="Take a picture. It may take time to validate your personal information"/>

  } else {
    return <Title title="Take picture"
                  description="Fit your ID card inside the frame. The picture will be taken automatically"/>
  }
}

function PhotoContent(props: any) {
  if (isPhoto(props.mode)) {
    return <Photo/>
  } else {
    return <Scanner/>
  }
}

const mapStateToProps = (state: any) => {
  return {
    mode: state.ModeReducer.mode,
    currentPhoto: state.PhotoReducer.currentPhoto
  }
};

type Props = {
  mode: Mode,
  currentPhoto: CurrentPhoto
}

class App extends React.Component<Props> {
  render() {
    return (
      <div className={isPhoto(this.props.mode) ? 'photo' : 'camera'}>
        {isPhoto(this.props.mode) &&
        <header><p className="logo">BankClient</p></header>}
        <div className={'content'}>
          <PageTitle mode={this.props.mode}/>
          <PhotoContent mode={this.props.mode}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)