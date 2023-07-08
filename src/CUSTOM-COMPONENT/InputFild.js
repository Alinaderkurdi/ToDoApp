import React from 'react';
import Button from './Button';
import style from './InputFild.module.css';
import Container from './Container';


const InputFild = (props)=>{
   // console.log(props)
    return(
       <Container style={props.inputContainerStyle}>
        <input type={props.inputType} className={props.inputFildStyle}  placeholder={props.placeholderText}/>
        <Button buttonProps={props.inputButtonStyle} functionHandeler={props.functionPointer}>
            {props.buttonIcone}
        </Button>
       </Container>
        
    )
}


export default InputFild;