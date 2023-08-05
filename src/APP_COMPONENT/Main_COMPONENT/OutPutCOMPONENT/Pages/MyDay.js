
import React from 'react';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './PageGlobalStyle.module.css';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem'
//{myDay.toDoOnmyDay === 0 ? <NoneContentPage/> :
//myDay.myDayToDo.map(todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)}





const MyDay = ()=>{
    const  myDay = useSelector(state => state.todo.myDay)
    const outPut = useReanderItem(myDay)
    return(
        <Container style={style['continer-main']}>
          {outPut}
        </Container>
    )
}

export default MyDay