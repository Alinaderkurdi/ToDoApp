import React from 'react';

import Container from '../../CUSTOM-COMPONENT/Container';
import Button from '../../CUSTOM-COMPONENT/Button';
import style from './MainHead.module.css';
import MainDisplayDate from './MainHeadCOMPONENT/MainDisplayDate';

//<Button buttonProps={style['add-background-bt']}></Button>


const MainHead = ()=>{
    return (
      <Container style={style['main-head']}>
        <MainDisplayDate />
        <Button buttonProps={style['color-them-button']}>
          <i className="bi bi-three-dots"></i>
        </Button>
      </Container>
    )
}

export default MainHead;