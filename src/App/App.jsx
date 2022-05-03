import React from "react";
import Button from "./components/ui/Button/Button";
import { ADR_REST } from "./config/config";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { memes:[], images: [] };
  }
  componentDidMount(){
    const memes=  fetch(ADR_REST+'/memes').then(flux=>flux.json())
    const img =  fetch(ADR_REST+'/images').then(flux=>flux.json())
    Promise.all([memes,img]).then(arr=>this.setState({memes:arr[0],images:arr[1]}))
  }
  componentDidUpdate(oldProps, oldSate) {
    console.log("component update", oldSate, this.state);
  }
  render() {
    return (
      <div className="App">
       {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;
