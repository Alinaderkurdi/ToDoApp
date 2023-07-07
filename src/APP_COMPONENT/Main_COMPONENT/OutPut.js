import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
//import SingleToDo from '../SingleToDo/SingleToDo';
import style from './OutPut.module.css';

const OutPut = ()=>{
  let addScrollbar = false;

  return(
    <Container style={`${style['out-put-main']} ${addScrollbar ? style['add-scrollbar']:''}`}>
      
    </Container>
  )
}

export default OutPut;