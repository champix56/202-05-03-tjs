import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./PDFMemeSVGViewer.module.css";
import { Svg, Text, Image } from "@react-pdf/renderer";
const pdfMemeSvgViewerInitialState = {};
const PDFMemeSVGViewer = (props) => {
  // const [state, setstate] = useState(pdfMemeSvgViewerInitialState);
  // useEffect(() => {}, []);
  return (
    <Svg
      width={"100%"}
      height={"100%"}
      viewBox={`0 0 ${props.image ? props.image.w : "1000"} ${
        props.image ? props.image.h : "1000"
      }`}
    >
      {props.image && <Image src={`${props.baseUrl}${props.image.url}`} x="0" y="0" />}
      <Text
        x={props.meme.x}
        y={props.meme.y}
        style={{
          fontSize: props.meme.fontSize,
          fontWeight: props.meme.fontWeight,
          textDecoration: props.meme.underline ? "underline" : "none",
          fontStyle: props.meme.italic ? "italic" : "normal",
          fill: props.meme.color,
        }}
      >
        {props.meme.text}
      </Text>
    </Svg>
  );
};

PDFMemeSVGViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  image: PropTypes.object,
};
PDFMemeSVGViewer.defaultProps={baseUrl:'/img/'}
export default PDFMemeSVGViewer;
