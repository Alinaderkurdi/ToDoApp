import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import MainHead from './Main_COMPONENT/MainHead';
import OutPut from './Main_COMPONENT/OutPut';
import InputSection from './Main_COMPONENT/InputSection';
//import { BrowserRouter } from 'react-router-dom';

const Main  = ()=>{
  
  return(
    <Container style={style['main-ontainer']}>
      <MainHead />
       <OutPut />
      <InputSection />
    </Container>
  )
}

export default Main; 