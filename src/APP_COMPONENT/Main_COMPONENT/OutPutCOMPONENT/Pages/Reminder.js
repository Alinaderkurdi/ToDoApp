import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
//import SingleToDo from '../SingleToDo';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';
import { useSelector } from 'react-redux';


const Reminder = ()=>{
    const reminder = useSelector(state => state.todo.riminder)
    const outPut = useReanderItem(reminder)
    return(
        <Container style={style['continer-main']}>
           {outPut}
        </Container>
    )
}



export default Reminder;
