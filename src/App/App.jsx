import React from "react";
import FlexW from "./components/layout/FlexW/FlexW";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { ADR_REST } from "./config/config";
import MemeForm from "./components/ui/MemeForm/MemeForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { memes: [], images: [] };
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
          {this.state.memes.length &&
            <MemeSVGViewer
            meme={this.state.memes[0]}
            image={this.state.images.find(
              (e) => e.id === this.state.memes[0].imageId
            )}
          />}
          <MemeForm/>
        </FlexW>
      </div>
    );
  }
}

export default App;
