import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types';

const Button = (props)=>{
    console.log(props)
    return <button className={style.Button} style={ {backgroundColor:props.bgColor} }>{props.children}</button>
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired
}
export default Button