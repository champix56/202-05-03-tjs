import React from "react";
import PropTypes from "prop-types";
import style from "./MemeThumbnail.module.css";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";

const MemeThumbnail: React.FC<{
  images: Array<IImage>;
  memes: Array<IMeme>;
}> = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e: IMeme, i: number) => (
        <MemeSVGViewer
          key={"thumb-" + i}
          meme={e}
          image={props.images.find((img: IImage) => img.id === e.imageId)}
        />
      ))}
    </div>
  );
};

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

function mapStateToProps(state:any,ownprops:any){
  return {
    ...ownprops,
    memes:state.memes,
    images:state.images
  }
}
function mapDispatchToProps(dispatch){
    return {}
}
export const ConnectedMemeThumbnail=connect(mapStateToProps,mapDispatchToProps)(MemeThumbnail);
export default MemeThumbnail;
