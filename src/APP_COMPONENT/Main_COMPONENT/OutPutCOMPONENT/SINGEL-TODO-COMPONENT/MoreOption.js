import React from 'react'; 
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './MoreOption.module.css';
import Button from '../../../../CUSTOM-COMPONENT/Button';
import { ToDoActions } from '../../../../STORE/SLICES/todos';
import { useDispatch, useSelector } from 'react-redux';


const MoreOption = (props)=>{
    const test = useSelector(state => state.todo)
    console.log(test)
   // console.log(props)
   // console.log(props.data.counter)
   // console.log(props)
    const tododata  = props.data.todoValue
    console.log(tododata.key)
    const dispatch = useDispatch()

    const deleteToDo = ()=>{
       dispatch(
        ToDoActions.removeToDo({
          todoId: tododata.key,
          objectKey: props.data.objectKey,
          counter : props.data.counter,
          todos: props.data.todos
        })
       )
    }
    return(
      <Container
       style={style['more-option-main']}
       backgroundColor={'secondrayColor'}
       animation={{opasity: 1, y: 2, scale:1}}
       initial={{opasity: 0.5 ,y:-1, scale: 0.8}}
       durationValue={0.2}
        >
        <Button buttonProps={style['delete-button']} functionHandeler={deleteToDo}>
          <i className="bi bi-trash3" ></i>
        </Button>
      </Container>
    )
}


export default MoreOption;