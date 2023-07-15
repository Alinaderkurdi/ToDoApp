import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import SingleToDo from '../Main_COMPONENT/OutPutCOMPONENT/SingleToDo';
import style from './OutPut.module.css';
//import Importent from './OutPutPage/Importent';
//import Planned from './OutPutPage/Planned';
//import  { Route } from 'react-router-dom';
//<SingleToDo></SingleToDo>



const OutPut = ()=>{

  return(
    <Container style={`${style['out-put-main']}`}>
      <SingleToDo />
    </Container>
  )
}

export default OutPut;