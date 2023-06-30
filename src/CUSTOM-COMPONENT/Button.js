import React from 'react';


const Button = (props)=>{
  return (
    <button onClick={props.functionHandeler} className={props.buttonProps} value={props.buttonValue}>{props.children}</button>
  )
}

export default Button;