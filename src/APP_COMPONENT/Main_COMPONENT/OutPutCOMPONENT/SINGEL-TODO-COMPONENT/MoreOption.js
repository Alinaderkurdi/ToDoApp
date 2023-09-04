import React, { useState } from 'react'; 
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './MoreOption.module.css';
import Button from '../../../../CUSTOM-COMPONENT/Button';
import { ToDoActions } from '../../../../STORE/SLICES/todos';
import { useDispatch, useSelector } from 'react-redux';
import AsckBeforeDeleting from './AsckBeforeDeleting';
import useAddBoxShadow from '../../../../CUTOM-HOOKS/useAddBoxShadow';


const MoreOption = (props)=>{
  const boxShadow = useAddBoxShadow()
  const test = useSelector(state => state.todo)
  const addDeleteBox = useSelector(state => state.settings.confirmBefroeDeleting)
  const {objectKey, counter, todos } = props.data
  const tododata  = props.data.todoValue
  const [showAsck , setShowAsck] = useState(false)

  const dispatch = useDispatch()

  const cancelDelete = ()=>{
    setShowAsck(false)
  }

  const dispatchDeleteToDo = ()=>{
    console.log('run !!!!!')
    dispatch(
      ToDoActions.removeToDo({
        todoId: tododata.key,
        objectKey,
        counter ,
        todos
      })
     )
  }

  const deleteToDo = ()=>{
    if(addDeleteBox){
      setShowAsck(true)
    }else{
      dispatchDeleteToDo()
    }
  }
  return(
    <Container
     style={`${style['more-option-main']} ${boxShadow}`}
     backgroundColor={'secondrayColor'}
     animation={{opasity: 1, y: 2, scale:1}}
     initial={{opasity: 0.5 ,y:-1, scale: 0.8}}
     durationValue={0.2}
      >
      <Button buttonProps={style['delete-button']} functionHandeler={deleteToDo}>
        <i className="bi bi-trash3" ></i>
      </Button>
      {showAsck ? <AsckBeforeDeleting 
       deleteFuctionPointer={dispatchDeleteToDo}
       cancelHandeler={cancelDelete} /> 
       : null}
    </Container>
  )
}


export default MoreOption;