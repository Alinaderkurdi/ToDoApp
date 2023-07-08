import React , { useRef , useState} from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import InputFild from '../../CUSTOM-COMPONENT/InputFild';


const InputSection = ()=>{
   const  [inputFildplaceholderText, inputFildplaceholderUpDater] = useState('Add a Task')
   const inputFild = useRef()

   const [ValidInput, ValidInputUpDater] = useState(true)


   const inputValidation = (inputValue)=>{
     if(inputValue.length === 0 || inputValue.trim().length === 0){
        inputFildplaceholderUpDater('some masage to display inValid input')
        inputFild.current.value = ''
        ValidInputUpDater(false)
        return false
     }else{
       inputFildplaceholderUpDater('Add a Task')
       ValidInputUpDater(true)
       return true
     }
   }



   const getValue = ()=>{
      if(inputValidation(inputFild.current.value)){
         console.log(inputFild.current.value)
      }else{
         return
      }
       
   }


   return(
      <Container style={style['input-section-main']}>
       <InputFild 
         elementRef={inputFild}
         inputContainerStyle={style['input-container-style']}
         placeholderText={inputFildplaceholderText}
         inputFildStyle={style['add-task-inputfild-style']}
         inputButtonStyle={`${style['add-button']}`}
         buttonIcone={<i className="bi bi-plus-lg"></i>}
         functionPointer={getValue} />
      </Container>
   )
}


export default InputSection;