import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import MainHead from './Main_COMPONENT/MainHead';
//import InputSection from './Main_COMPONENT/InputSection';
//import OutPut from './Main_COMPONENT/OutPut';
//import Buttons from './Main_COMPONENT/Buttons';



const Main  = ()=>{

  return(
    <Container style={style['main-ontainer']}>
      <MainHead />
    </Container>
  )
}

export default Main; 