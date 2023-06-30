import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import InputSection from './Main_COMPONENT/InputSection';
import OutPut from './Main_COMPONENT/OutPut';
import Buttons from './Main_COMPONENT/Buttons';



const Main  = ()=>{
   return(
     <Container style={style['main-ontainer']}>
        <InputSection></InputSection>
        <OutPut></OutPut>
        <Buttons></Buttons>
     </Container>
   )
}

export default Main; 