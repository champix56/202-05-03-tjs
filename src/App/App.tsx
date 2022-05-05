import FlexW from "./components/layout/FlexW/FlexW";
import MemeSVGViewer from "./components/ui/ConnectedMemeViewer/ConnectedMemeViewer";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import { ConnectedMemeThumbnail } from "./components/ui/MemeThumbnail/MemeThumbnail";
import NavBar from "./components/ui/NavBar/NavBar";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ACTIONS_CURRENT, ACTION_RESSOURCES, store } from "./store/store";
import { PDFConnectedMemeThumbnail } from "./components/pdf/PDFThumbnail/PDFThumbnail";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Hello a tous</div>} />
        <Route path="/editor" element={<MemeEditor/>} />
        <Route path="/editor/:id" element={<MemeEditor/>} />
        <Route path="/thumbnail" element={<ConnectedMemeThumbnail />} />
        <Route path="/thumbnailPDF" element={<PDFConnectedMemeThumbnail/>} />
      </Routes>
    </div>
  );
};
function MemeEditor(props:any) {
  return (
    <FlexW>
      <MemeSVGViewer />
      <ConnectedMemeForm />
    </FlexW>
  );
}

export default App;
