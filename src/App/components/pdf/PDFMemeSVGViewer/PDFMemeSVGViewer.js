import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Svg, Image, Text } from "@react-pdf/renderer";

const PDFMemeSVGViewer = (props) => {
  const dimension = props.image
    ? { w: props.image.w, h: props.image.h }
    : { h: 1000, w: 1000 };
  return (
    <Svg viewBox={`0 0 ${dimension.w} ${dimension.h}`}>
      {props.image && (
        <Image src={`${props.baseUrl}${props.image.url}`} x={0} y={0} />
      )}
      <Text
        x={props.meme.x}
        y={props.meme.y}
        style={{
          fontWeight: String(props.meme.fontWeight),
          fontSize: props.meme.fontSize,
          fill: props.meme.color,
          textDecoration: props.meme.underline ? "underline" : "none",
          fontStyle: props.meme.italic ? "italic" : "normal",
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
PDFMemeSVGViewer.defaultProps = {
  baseUrl: "/img/",
};

export default PDFMemeSVGViewer;
