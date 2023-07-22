import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import SingleToDo from '../SingleToDo';

const Planned = ()=>{
    return (
        <Container style={style['continer-main']}>
            <SingleToDo></SingleToDo>
        </Container>
    )
}

export default Planned;