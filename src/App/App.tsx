import React from "react";
import FlexW from "./components/layout/FlexW/FlexW";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { ADR_REST } from "./config/config";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import {  IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { DummyMeme } from "./interfaces/common";
interface IAppState{
  memes:Array<IMeme>,
  images:Array<IImage>,
  current:IMeme
}
interface IAppProps{}
class App extends React.Component<IAppProps,IAppState> {
  constructor(props) {
    super(props);
    this.state = { memes: [], images: [],current:DummyMeme };
  }
  componentDidMount() {
    const memes = fetch(ADR_REST + "/memes").then((flux) => flux.json());
    const img = fetch(ADR_REST + "/images").then((flux) => flux.json());
    Promise.all([memes, img]).then((arr) =>
      this.setState({ memes: arr[0], images: arr[1] })
    );
  }
  componentDidUpdate(oldProps, oldSate) {
    console.log("component update", oldSate, this.state);
  }
  render() {
    return (
      <div className="App">
        <FlexW>
  
            <MemeSVGViewer
            meme={this.state.current}
            image={this.state.images.find(
              (e) => e.id === this.state.current.imageId
            )}
          />
          <MemeForm images={this.state.images}/>
        </FlexW>
      </div>
    );
  }
}

export default App;
