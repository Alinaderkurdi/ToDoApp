import React from 'react';


const Button = (props)=>{
  //console.log(props)
  return (
    <button
     onClick={props.functionHandeler} 
     className={props.buttonProps} 
     value={props.buttonValue} 
     disabled={props.disabledButton}>
      {props.children}
    </button>
  )
}

export default Button;