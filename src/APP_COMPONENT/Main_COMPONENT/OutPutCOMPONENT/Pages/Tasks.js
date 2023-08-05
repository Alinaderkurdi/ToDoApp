import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux'
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';
//import SingleToDo from '../SingleToDo';



const Tasks = ()=>{
    const tasks = useSelector(state => state.todo.tasks)
    const outPut= useReanderItem(tasks)
    console.log(tasks)
    return(
        <Container style={style['continer-main']}>
          {outPut}
        </Container>
    )
}


export default Tasks;