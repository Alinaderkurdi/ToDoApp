import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem'
import Button from '../../../../CUSTOM-COMPONENT/Button';
import { useDispatch } from 'react-redux';
import { ToDoActions } from '../../../../STORE/SLICES/todos';
//import SingleToDo from '../SingleToDo';
//import NoneContentPage from './PAGE_COMPONENT/NoneContentPage';
//toData={todos} key={todos.todoValue.key}
//{importent.toDoOnImportent === 0 ? <NoneContentPage /> : 
//importent.importentToDo.map(todos =>  <SingleToDo  todoData={todos} key={todos.todoValue.key}/>)}


const Importent = ()=>{
    const importent = useSelector(state => state.todo.importent)
    const actionDispatch = useDispatch()
    const deleteAllToDo = ()=>{
        actionDispatch(
           ToDoActions.removeAllToDo({
             objectKey:'importent',
             counter: 'toDoOnImportent',
             todos: 'importentToDo'
           })
        )
    }
    let [outPut, renderDeleteAllToDo] = useReanderItem(importent)

    return(
        <Container style={style['continer-main']}>
            {outPut}
            {renderDeleteAllToDo ? 
            <Button buttonProps={style['delete-all-button']} 
            functionHandeler={deleteAllToDo}><i className="bi bi-trash3"></i></Button> :
             null}
        </Container>
    )
}

export default Importent;
