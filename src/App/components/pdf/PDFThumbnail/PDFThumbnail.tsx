import React from "react";
import PropTypes from "prop-types";
import style from "./MemeThumbnail.module.css";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { connect } from "react-redux";

const PDFMemeThumbnail: React.FC<{
  images: Array<IImage>;
  memes: Array<IMeme>;
}> = (props) => {
  return (
    <div className={style.PDFMemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e: IMeme, i: number) => (
        <div>
          
        </div>
      ))}
    </div>
  );
};

PDFMemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

function mapStateToProps(state: any, ownprops: any) {
  return {
    ...ownprops,
    memes: state.ressources.memes,
    images: state.ressources.images,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export const PDFConnectedMemeThumbnail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PDFMemeThumbnail);
export default PDFMemeThumbnail;
