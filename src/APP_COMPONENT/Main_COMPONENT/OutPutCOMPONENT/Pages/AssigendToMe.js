import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import SingleToDo from '../SingleToDo';
import NoneContentPage from './PAGE_COMPONENT/NoneContentPage';


const AssigendToMe =()=>{
    let a = false;
    return(
        <Container style={style['continer-main']}>
            {a ? <NoneContentPage /> : <SingleToDo />}
        </Container>
    )
}

export default AssigendToMe;