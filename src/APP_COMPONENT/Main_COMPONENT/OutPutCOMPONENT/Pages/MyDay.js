
import React from 'react';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './PageGlobalStyle.module.css';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem'
import Button from '../../../../CUSTOM-COMPONENT/Button';
//{myDay.toDoOnmyDay === 0 ? <NoneContentPage/> :
//myDay.myDayToDo.map(todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)}





const MyDay = ()=>{
    const  myDay = useSelector(state => state.todo.myDay)
    let [outPut, reanderDeleteAllButton, deleteAll]  = useReanderItem(myDay)
    return(
        <Container style={style['continer-main']}>
          {outPut}
          {reanderDeleteAllButton ? <Button 
          buttonProps={style['delete-all-button']} functionHandeler={deleteAll}><i className="bi bi-trash3"></i>
          </Button>:  null}
        </Container>
    )
}

export default MyDay