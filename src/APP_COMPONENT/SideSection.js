import React from 'react';
import Container from '../CUSTOM-COMPONENT/Container';
import style from  './SideSection.module.css';
import UserBox from './side-component/UserBox';
import SearchBox from './side-component/SearchBox';
import DefaultListSection from './side-component/DefaultListSection';


const SideSection = ()=>{

    return(
        <Container style={style['side-main']}
         fontColor={'fontColor'}
         backgroundColor={'secondrayColor'}
         >
            <UserBox></UserBox>
            <SearchBox></SearchBox>
            <DefaultListSection />
        </Container>
    )
}

export default SideSection;