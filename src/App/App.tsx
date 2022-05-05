import FlexW from "./components/layout/FlexW/FlexW";
import MemeSVGViewer from "./components/ui/ConnectedMemeViewer/ConnectedMemeViewer";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import { ConnectedMemeThumbnail } from "./components/ui/MemeThumbnail/MemeThumbnail";
import NavBar from "./components/ui/NavBar/NavBar";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ACTIONS_CURRENT, ACTION_RESSOURCES, store } from "./store/store";
import { PDFConnectedMemeThumbnail } from "./components/pdf/PDFThumbnail/PDFThumbnail";
import { connect } from "react-redux";
import { IMeme } from "orsys-tjs-meme/dist/interfaces/common";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<div>Hello a tous</div>} />
        <Route path="/editor" element={<MemeEditor />} />
        <Route path="/editor/:id" element={<MemeEditor />} />
        <Route path="/thumbnail" element={<ConnectedMemeThumbnail />} />
        <Route path="/thumbnailPDF" element={<PDFConnectedMemeThumbnail />} />
      </Routes>
    </div>
  );
};
function mstp(s, o) {
  return { memes: s.ressources.memes };
}
function mdtp(d: Function) {
  return {
    select: (meme?:IMeme) => {
      console.log("hello", meme, store.getState().ressources);

      if (undefined !== meme) {
        d({ type: ACTIONS_CURRENT.UPDATE_MEME, value: meme });
      } else {
        d({ type: ACTIONS_CURRENT.CLEAR_CURRENT });
      }
    },
  };
}
const MemeEditor = connect(
  mstp,
  mdtp
)(function (props: any) {
  let id = useParams().id;
  useEffect(() => {
    props.select(props.memes.find(m=>m.id===Number(id)));
  }, [props,id]);
  return (
    <FlexW>
      <MemeSVGViewer />
      <ConnectedMemeForm />
    </FlexW>
  );
});

export default App;
