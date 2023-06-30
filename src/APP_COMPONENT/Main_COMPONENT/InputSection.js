import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import GetValue from './GetValue';


const InputSection = ()=>{
    return(
       <Container style={style['input-section-main']}>
        <GetValue></GetValue>
       </Container>
    )
}


export default InputSection;