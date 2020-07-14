import React from 'react';
import './App.css';
import Title from './components/title'
import Scanner from "./components/scanner";
import Photo from "./components/photo";
import { AppState, Mode } from "./types";

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

class App extends React.Component{
  state: AppState = {
    mode: Mode.Photo,
    currentPhoto: null
  }
  render() {
    return (
      <div className="App">
        {this.state.mode === Mode.Scan && <header>BankClient</header>}
        <PageTitle mode={this.state.mode}/>
        <PhotoContent mode={this.state.mode}/>
      </div>
    );
  }
}

export default App;
