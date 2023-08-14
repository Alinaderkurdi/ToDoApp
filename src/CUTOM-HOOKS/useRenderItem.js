import SingleToDo from '../APP_COMPONENT/Main_COMPONENT/OutPutCOMPONENT/SingleToDo'
import NoneContentPage from '../APP_COMPONENT/Main_COMPONENT/OutPutCOMPONENT/Pages/PAGE_COMPONENT/NoneContentPage'
import React from 'react';

//get a page todo object an a data to configer noneContent component with diffrent content
//and return a variable  to show final out put in diffrent page section

//for delete all todo define delete logic in the useReanderItem and return a function pointer and call function
// in button inside pages 
//and dispatch action there !!!


const useReanderItem  = (pageToDo)=>{
   const getKey = Object.keys(pageToDo)
   //console.log(getKey[0].)
   //console.log(pageToDo)
   const key =  getKey[0]
   const counter = getKey[1]
  // console.log(pageToDo[key][0].objectKey)
   const reanderDeleteAll = pageToDo[counter] > 2 ? true : false;
   let result = pageToDo[counter] === 0 ? <NoneContentPage /> :
   pageToDo[key].map( todos => <SingleToDo todoData={todos} key={todos.todoValue.key}/>)
   return [result, reanderDeleteAll]
}

export default useReanderItem