import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import MainHead from './Main_COMPONENT/MainHead';
import OutPut from './Main_COMPONENT/OutPut';
import InputSection from './Main_COMPONENT/InputSection';
import { useSelector } from 'react-redux';


const Main  = ()=>{
  const colorThem = useSelector(state => state.them)

  const imageBackround = colorThem.mainBackground
  //console.log(colorThem)
  //mainBackground
 // themeBackground.typeOfBackground === 'COLOR' ? themeBackground[backgroundKey] : ''

  return(
    <Container style={style['main-ontainer ']}  backgroundColor={'mainBackground'}>
      <MainHead />
      <OutPut />
      <InputSection />
    </Container>
  )
}

export default Main; 