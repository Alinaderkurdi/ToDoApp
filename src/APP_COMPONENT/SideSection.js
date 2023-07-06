import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from  './SideSection.module.css';
import UserBox from './Side_COMPONENT/UserBox';

const SideSection = ()=>{
    return(
        <Container style={style['side-main']}>
            <UserBox></UserBox>
        </Container>
    )
}

export default SideSection;