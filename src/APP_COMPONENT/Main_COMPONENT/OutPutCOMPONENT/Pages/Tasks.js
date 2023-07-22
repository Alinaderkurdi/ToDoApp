import React from 'react';
//import style from './Importent.module.css';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import SingleToDo from '../SingleToDo';


const Tasks = ()=>{
    return(
        <Container style={style['continer-main']}>
           <SingleToDo></SingleToDo>
        </Container>
    )
}


export default Tasks;