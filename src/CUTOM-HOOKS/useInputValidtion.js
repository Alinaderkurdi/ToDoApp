import React,{ useState} from 'react';


const useInputValidation = ()=>{
  const [disabledButton , setDisabledButton] = useState(true)
  const [inputValue , setInputValue] =  useState('')

  const getInput = (event)=>{
    console.log('run get Value')
    if(event.target.value.length === 0 || event.target.value.trim().length === 0){
     setDisabledButton(true)
    }else{
     setDisabledButton(false)
     setInputValue(event.target.value)
    }
  }

  return [disabledButton, inputValue , getInput]

}

export default useInputValidation;