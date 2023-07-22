import React from 'react';
//import style from './Work.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './PageGlobalStyle.module.css';
import SingleToDo from '../SingleToDo';


const Work = ()=>{
    return(
        <Container style={style['continer-main']}>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
            <SingleToDo></SingleToDo>
        </Container>
    )
}

export default Work;