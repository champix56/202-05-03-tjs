import FlexW from "./components/layout/FlexW/FlexW";
import MemeSVGViewer from "./components/ui/ConnectedMemeViewer/ConnectedMemeViewer";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import { ConnectedMemeThumbnail } from "./components/ui/MemeThumbnail/MemeThumbnail";
import NavBar from "./components/ui/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      {/* <ConnectedMemeThumbnail /> */}
      <FlexW>
        <MemeSVGViewer />
        <ConnectedMemeForm />
      </FlexW>
    </div>
  );
};

export default App;
