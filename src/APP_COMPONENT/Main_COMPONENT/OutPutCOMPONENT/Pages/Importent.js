import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem'
//import SingleToDo from '../SingleToDo';
//import NoneContentPage from './PAGE_COMPONENT/NoneContentPage';
//toData={todos} key={todos.todoValue.key}
//{importent.toDoOnImportent === 0 ? <NoneContentPage /> : 
//importent.importentToDo.map(todos =>  <SingleToDo  todoData={todos} key={todos.todoValue.key}/>)}


const Importent = ()=>{
    const importent = useSelector(state => state.todo.importent)
    let outPut = useReanderItem(importent)
    return(
        <Container style={style['continer-main']}>
            {outPut}
        </Container>
    )
}

export default Importent;
