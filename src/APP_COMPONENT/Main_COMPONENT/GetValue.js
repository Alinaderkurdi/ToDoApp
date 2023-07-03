import React , { useState, useRef }from 'react';
import style from './GetValue.module.css';
import Button from '../../CUSTOM-COMPONENT/Button';



const GetValue = (props)=>{
  const inputFild = useRef()
  const  [currentPlaceholderText, placeholderUpDator] = useState('Create a new todo')
  const [inputValidatorResult, valueUpDator] = useState(true)

  const inputValidator = (inputValue)=>{

    if(inputValue.length === 0 || inputValue.trim().length === 0){
      valueUpDator(false)
      placeholderUpDator('Plase Add a valid input!')
      if(inputValue.trim().length === 0){
        placeholderUpDator('empty value')
        inputFild.current.value = ''
      }
      return false
    }else{
      valueUpDator(true)
      return true
    }
  }

  const getUserValue = ()=>{
    if(inputValidator(inputFild.current.value)){
      props.onGetData(inputFild.current.value)
      inputFild.current.value = ''
    }else{
      return
    }
  }
    
  return(
          <>
            <input className={style['input-fild']} placeholder={currentPlaceholderText} ref={inputFild}/>
            <Button buttonProps={style['add-button']} functionHandeler={getUserValue} buttonValue={null}>
             <i className='bi bi-plus-lg'></i>
            </Button>
          </>
  )
}


export default GetValue;