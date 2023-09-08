import SingleToDo from '../APP_COMPONENT/main-component/OutPutCOMPONENT/SingleToDo'
import NoneContentPage from '../APP_COMPONENT/main-component/OutPutCOMPONENT/Pages/page-component/NoneContentPage'
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToDoActions } from '../STORE/SLICES/todos';


const useReanderItem  = (pageToDo)=>{

   const dispatch = useDispatch()

   const getKey = Object.keys(pageToDo)
   const key =  getKey[0]
   const counter = getKey[1]
   const [ value ]  = pageToDo[key]
   
   let todoObjectKey

   if( value !== undefined ){
      todoObjectKey = Object.keys(value)
   }

   const deleteAll = ()=>{
      dispatch(
         ToDoActions.removeAllToDo({
            objectKey: value[todoObjectKey[1]],
            counter: value[todoObjectKey[2]],
            todos: value[todoObjectKey[3]]
         })
      )
   }

   const reanderDeleteAllButton = pageToDo[counter] > 2 ? true : false;
   let result = pageToDo[counter] === 0 ? <NoneContentPage /> :
   pageToDo[key].map( todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)
   return [result, reanderDeleteAllButton, deleteAll]
}

export default useReanderItem