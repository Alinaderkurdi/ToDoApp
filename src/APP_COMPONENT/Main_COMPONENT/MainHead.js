import React from 'react';

import Container from '../../CUSTOM-COMPONENT/Container';
import Button from '../../CUSTOM-COMPONENT/Button';
import style from './MainHead.module.css';
import MainDisplayDate from './MainHeadCOMPONENT/MainDisplayDate';
import ColorThemSection from './MainHeadCOMPONENT/ColorThemSection';


//<Button buttonProps={style['add-background-bt']}></Button>


const MainHead = ()=>{
  let a = false;
  const addColorThem = ()=>{
    console.log('add color them .....')
  }
  
  return (
    <Container style={style['main-head']}>
      <MainDisplayDate />
      <Button buttonProps={style['color-them-button']} functionHandeler={addColorThem}>
        <i className="bi bi-three-dots"></i>
      </Button>
      {a ? <ColorThemSection /> :  ''}
    </Container>
  )
}

export default MainHead;