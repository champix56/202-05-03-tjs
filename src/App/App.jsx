import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div className="App">
      {/* <Button text="Un texte de button"></Button> */}
      <Button bgColor="skyblue">du texte children</Button>
      <Button bgColor="aquamarine">
        <div>text children node</div>
      </Button>
      <Button color="blue" style={{textDecoration:'underline', fontWeight:900,fontStyle:'italic'}}>
        <div>text children node1</div>
        <div>text children node2</div>
      </Button>
    </div>
  );
}

export default App;
