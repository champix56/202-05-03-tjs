import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div className="App">
      {/* <Button text="Un texte de button"></Button> */}
      <Button>du texte children</Button>
      <Button>
        <div>text children node</div>
      </Button>
      <Button>
        <div>text children node1</div>
        <div>text children node2</div>
      </Button>
    </div>
  );
}

export default App;
