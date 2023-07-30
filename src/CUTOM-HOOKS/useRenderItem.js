import SingleToDo from '../APP_COMPONENT/Main_COMPONENT/OutPutCOMPONENT/SingleToDo'
import NoneContentPage from '../APP_COMPONENT/Main_COMPONENT/OutPutCOMPONENT/Pages/PAGE_COMPONENT/NoneContentPage'
import React from 'react';

//get a page todo object an a data to configer noneContent component with diffrent content
//and return a variable  to show final out put in diffrent page section


const useReanderItem  = (pageToDo)=>{
   const getKey = Object.keys(pageToDo)
    const key =  getKey[0]
   let result = pageToDo.toDoOnWork === 0 ? <NoneContentPage /> :
   pageToDo[key].map( todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)
   return result
}

export default useReanderItem