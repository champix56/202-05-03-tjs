import React from "react";
import FlexW from "./components/layout/FlexW/FlexW";
import { MemeSVGThumbnail, MemeSVGViewer } from "orsys-tjs-meme";
import { ADR_REST } from "./config/config";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { DummyMeme } from "./interfaces/common";
import { ConnectedMemeThumbnail } from "./components/ui/MemeThumbnail/MemeThumbnail";
import {ACTION_RESSOURCES, store} from './store/store'
interface IAppState {
  memes: Array<IMeme>;
  images: Array<IImage>;
  current: IMeme;
}
interface IAppProps {}
class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = { memes: [], images: [], current: DummyMeme };
  }
  componentDidMount() {
    
  }
  componentDidUpdate(oldProps, oldSate) {
    console.log("component update", oldSate, this.state);
  }
  render() {
    return (
      <div className="App">
        {/* <MemeThumbnail memes={this.state.memes} images={this.state.images}/> */}
        <ConnectedMemeThumbnail/>
        <FlexW>
          <MemeSVGViewer
            meme={this.state.current}
            image={this.state.images.find(
              (e) => e.id === this.state.current.imageId
            )}
          />
          <MemeForm
            images={this.state.images}
            meme={this.state.current}
            onFormChange={(objt: object) => {
              this.setState({current:{...this.state.current,...objt}});
            }}
          />
        </FlexW>
      </div>
    );
  }
}

export default App;
