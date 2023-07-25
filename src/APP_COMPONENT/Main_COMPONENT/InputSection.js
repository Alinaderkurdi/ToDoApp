import React ,{ useRef } from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import InputFild from '../../CUSTOM-COMPONENT/InputFild';
import useInputValidation from '../../CUTOM-HOOKS/useInputValidtion';




const InputSection = ()=>{
   const [disabledButton, inputValue , getInput, setDisabledButton] = useInputValidation()
   const inputFild = useRef()

   
   const keyGenerator = (keylenght)=>{
      const string = '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p';
      let result =''
      let lenghtKey = keylenght
      for(let i = 0; i < lenghtKey ; i++){
        result += string.charAt(Math.floor(Math.random() * lenghtKey))
      }
      return result;
   }

   const createNewToDo = (value)=>{
    const toDo = {
      content : value,
      addToImport: false,
      complete: false,
      key:keyGenerator(4),
      pageName : 'my-day',
    }
    return toDo;
   }

   const getCurrentValue = ()=>{
      console.log(createNewToDo(inputValue))
      inputFild.current.value = ''
      setDisabledButton(true)
   }


   return(
      <Container style={style['input-section-main']}>
       <InputFild 
         functionHandeler={getInput}
         elementRef={inputFild}
         inputContainerStyle={style['input-container-style']}
         placeholderText={'Add a Task'}
         inputFildStyle={style['add-task-inputfild-style']}
         inputButtonStyle={`${style['add-button']} ${disabledButton ? style['disabled-bt'] : '' }`}
         buttonIcone={<i className="bi bi-plus-lg"></i>}
         functionPointer={getCurrentValue}
         buttonDisabled={disabledButton} />
      </Container>
   )
}


export default InputSection;