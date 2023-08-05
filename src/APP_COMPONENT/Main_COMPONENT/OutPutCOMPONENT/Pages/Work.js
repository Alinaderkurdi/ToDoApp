import React from 'react';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './PageGlobalStyle.module.css';
import SingleToDo from '../SingleToDo';
import NoneContentPage from './PAGE_COMPONENT/NoneContentPage';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem'

//try to write a cousto hook to show noneToDo component //
//{work.toDoOnWork === 0 ? <NoneContentPage /> : work.workToDos.map(todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)}

const Work = ()=>{
    
    const work = useSelector(state => state.todo.work)
    let outPut = useReanderItem(work)
    return(
        <Container style={style['continer-main']}>
           {outPut}
        </Container>
    )
}

export default Work;