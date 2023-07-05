import React from 'react';

import style from './InputFild.module.css';
import Container from './Container';


const InputFild = (props)=>{
   // console.log(props)
    return(
       <Container style={props.inputContainerStyle}>
        <input type={props.inputType} className={props.inputFildStyle}  placeholder={props.placeholderText}/>
       </Container>
        
    )
}


export default InputFild;