import React from 'react';

//import style from './Button.module.css';

const Button = (props)=>{
  return (
    <button onClick={props.functionHandeler} className={props.buttonProps}>{props.children}</button>
  )
}

export default Button;