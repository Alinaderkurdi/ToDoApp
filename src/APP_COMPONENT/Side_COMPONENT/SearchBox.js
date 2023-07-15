
import React , {useRef, useState} from 'react';

import style from './SearchBox.module.css';
import  InputFild from '../../CUSTOM-COMPONENT/InputFild'; 
import useInputValidation from '../../CUTOM-HOOKS/useInputValidtion';

const SearchBox = ()=>{
  const searchFild = useRef()
  const [disabledButton, inputValue , getInput, setDisabledButton] = useInputValidation()

  const getFromSerach = ()=>{
    console.log(inputValue)
    searchFild.current.value = ''
    setDisabledButton(true)
  }
    
  return(
      <InputFild 
        elementRef={searchFild}
        functionHandeler={getInput}
        inputContainerStyle={style['sharch-box-container']}
        placeholderText={'Search for ToDo'}
        inputFildStyle={style['search-box-inputfild-style']}
        inputButtonStyle={`${style['search-button']} ${disabledButton ? style['disabled-bt'] : ''}`}
        buttonIcone={<i className="bi bi-search"></i>}
        functionPointer={getFromSerach}
        buttonDisabled={disabledButton}
        >
      </InputFild>
      
  )
}


export default SearchBox;