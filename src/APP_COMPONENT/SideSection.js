import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from  './SideSection.module.css';
import UserBox from './Side_COMPONENT/UserBox';
import SearchBox from './Side_COMPONENT/SearchBox';

const SideSection = ()=>{
    return(
        <Container style={style['side-main']}>
            <UserBox></UserBox>
            <SearchBox></SearchBox>
        </Container>
    )
}

export default SideSection;