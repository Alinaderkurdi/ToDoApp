import React , {state, useState} from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import MainHead from './main-component/MainHead';
import OutPut from './main-component/OutPut';
import InputSection from './main-component/InputSection';
import { useSelector } from 'react-redux';


const Main  = ()=>{
  const colorThem = useSelector(state => state.them)
  const imageBackround = colorThem.typeOfBackground
  const addImageBackGround = imageBackround  === 'COLOR' ? false : true
 
  return(
    <Container 
     style={`${style['main-ontainer']}   ${addImageBackGround ?  style['image-background-setup'] : null}`}
     backgroundColor={'mainBackground'}
     addImg={addImageBackGround}
     >
      <MainHead />
      <OutPut />
      <InputSection />
    </Container>
  )
}

export default Main; 