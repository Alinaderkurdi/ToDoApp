
import React from 'react';
import Container from '../../../../CUSTOM-COMPONENT/Container';
//import style from './MyDay.module.css';
import style from './PageGlobalStyle.module.css';
import SingleToDo from '../SingleToDo';

const MyDay = ()=>{
    return(
        <Container style={style['continer-main']}>
            <SingleToDo></SingleToDo>
        </Container>
    )
}

export default MyDay