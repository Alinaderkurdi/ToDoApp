import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from './Main.module.css';
import MainHead from './Main_COMPONENT/MainHead';
import InputFild from '../CUSTOM-COMPONENT/InputFild';

//import InputSection from './Main_COMPONENT/InputSection';
//import OutPut from './Main_COMPONENT/OutPut';
//import Buttons from './Main_COMPONENT/Buttons';


const Main  = ()=>{

  return(
    <Container style={style['main-ontainer']}>
      <MainHead />
      <InputFild 
       inputContainerStyle={style['input-container-style']}
       placeholderText={'Add a Task'}
       inputFildStyle={style['add-task-inputfild-style']}
       inputButtonStyle={style['add-button']}
       buttonIcone={<i className="bi bi-plus-lg"></i>}/>
    </Container>
  )
}

export default Main; 