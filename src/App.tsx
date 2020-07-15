import React from 'react';
import Title from './components/title'
import Scanner from "./components/scanner";
import Photo from "./components/photo";
import { connect } from "react-redux";
import { Mode } from "./types";

function PageTitle(props: any) {
  if (props.mode === Mode.Photo) {
    return <Title title="Scan your ID"
                  description="Take a picture. It may take time to validate your personal information"/>

  } else {
    return <Title title="Take picture"
                  description="Fit your ID card inside the frame. The picture will be taken automatically"/>
  }
}
function PhotoContent(props: any) {
  if (props.mode === Mode.Photo) {
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
  currentPhoto: String
}

class App extends React.Component<Props>{
  render() {
    return (
      <div className="App">
        {this.props.mode === Mode.Photo && <header>BankClient</header>}
        <PageTitle mode={this.props.mode}/>
        <PhotoContent mode={this.props.mode}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)