import React from "react";
import Button from "./components/ui/Button/Button";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1, title: "titre de l'app" };
  }
  componentDidUpdate(oldProps, oldSate) {
    console.log("component update", oldSate, this.state);
  }
  render() {
    return (
      <div className="App">
        Valeur du counter : {this.state.counter}
        <hr />
        <Button
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
          bgColor="skyblue"
        >
          Ajouter 1
        </Button>
        <Button
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
          bgColor="tomato"
        >
          Enlever 1
        </Button>
      </div>
    );
  }
}

export default App;
