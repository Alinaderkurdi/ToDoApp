import React  from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import InputFild from '../../CUSTOM-COMPONENT/InputFild';
import useInputValidation from '../../CUTOM-HOOKS/useInputValidtion';



const InputSection = ()=>{
   const [disabledButton, inputValue , getInput ] = useInputValidation()


  //const [disabledButton , setDisabledButton] = useState(true)
  //const [inputValue , setInputValue] =  useState('')

  //const getInput = (event)=>{
  //  console.log('run get Value')
  //  if(event.target.value.length === 0 || event.target.value.trim().length === 0){
  //   setDisabledButton(true)
  //  }else{
  //   setDisabledButton(false)
  //   setInputValue(event.target.value)
  //  }
  //}

 // {
 //  key: '123',
 //  content : 'don be a overthink',
 //  addToImportent : false,
 //  sectionName : 'my Day// add a function for get current app section',
 //  complete: false
 // }

   const getCurrentValue = ()=>{
      console.log(inputValue)
   }


   return(
      <Container style={style['input-section-main']}>
       <InputFild 
         functionHandeler={getInput}
         elementRef={null}
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