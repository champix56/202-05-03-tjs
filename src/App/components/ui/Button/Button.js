import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={style.Button}
      style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};

Button.defaultProps = {};
export default Button;
