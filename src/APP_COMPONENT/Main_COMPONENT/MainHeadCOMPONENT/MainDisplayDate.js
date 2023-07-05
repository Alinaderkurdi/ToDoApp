import React from 'react';

import style from './MainDisplay.module.css';

import Container from '../../../CUSTOM-COMPONENT/Container';

const MainDisplayDate = ()=>{
    return (
        <Container style={style['display-main']}>
            <h1 className={style['app-section-name']}>
              My Day
            </h1>
            <p className={style['disply-date']}>Wednesday,July,05</p>
        </Container>
    )
}


export default MainDisplayDate;