import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from  './SideSection.module.css';
import UserBox from './Side_COMPONENT/UserBox';
import SearchBox from './Side_COMPONENT/SearchBox';
import DefaultListSection from './Side_COMPONENT/DefaultListSection';


const SideSection = ()=>{

    return(
        <Container style={style['side-main']} fontColor={'fontColor'} backgroundColor={'secondrayColor'}>
            <UserBox></UserBox>
            <SearchBox></SearchBox>
            <DefaultListSection />
        </Container>
    )
}

export default SideSection;