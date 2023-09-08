
import React , {useRef} from 'react';

import style from './SearchBox.module.css';
import  InputFild from '../../CUSTOM-COMPONENT/InputFild'; 
import useInputValidation from '../../CUSTOM-HOOKS/useInputValidtion';
import { useSelector } from 'react-redux'

const SearchBox = ()=>{
  const currentThem = useSelector(state => state.them)
  const searchFild = useRef()
  const [disabledButton, inputValue , getInput, setDisabledButton] = useInputValidation()
 // console.log(currentThem)
  

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
        inputFildStyle={`${style['search-box-inputfild-style']} ${currentThem.mainBackground === '#11100F' ? style['sharch-fild-darke']: style['sharch-fild-light']}`}
        inputButtonStyle={`${style['search-button']} ${disabledButton ? style['disabled-bt'] : ''}`}
        buttonIcone={<i className="bi bi-search"></i>}
        functionPointer={getFromSerach}
        buttonDisabled={disabledButton}
        >
      </InputFild>
      
  )
}


export default SearchBox;