import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
//protection de reclick avant execution du settimeout
let descripteurSetTimeOut = undefined;
const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    console.log("isClicked a changer ->", isClicked);
    if (true === isClicked && descripteurSetTimeOut === undefined) {
      descripteurSetTimeOut = setTimeout(() => {
        setIsClicked(false);
        descripteurSetTimeOut = undefined;
      }, 1000);
    }
  }, [isClicked]);
  return (
    <button
      className={style.Button}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      type={props.type}
      onClick={(evt) => {
        setIsClicked(true);
        props.onButtonClicked();
      }}
    >
      {props.children}
      <br />
      {isClicked.toString()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onButtonClicked: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: "button",
  onButtonClicked: () => {},
};
export default Button;
