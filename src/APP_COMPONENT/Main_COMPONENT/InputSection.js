import React ,{ useRef, useState } from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import InputFild from '../../CUSTOM-COMPONENT/InputFild';
import useInputValidation from '../../CUTOM-HOOKS/useInputValidtion';
import { useSelector } from 'react-redux';
import { ToDoActions } from '../../STORE/SLICES/todos';
import { useDispatch } from 'react-redux';
import Button from '../../CUSTOM-COMPONENT/Button';


//plan 1 : with current selcted page send diffrent action based on page and every to to go insid own object
// and show diffrent component to configer input fild based on the current page!!


const InputSection = ()=>{
   const dispatchToDo = useDispatch()
   const currentPage = useSelector(state => state.section)
   const [showOption, setShowOption] = useState(false)
   const selectedPage =  {...currentPage};
   const currentColorThem = useSelector(state => state.them)

 //  if(currentColorThem.mainBackground === '#11100F')
  //console.log(selectedPage)

   
   const [disabledButton, inputValue , getInput, setDisabledButton] = useInputValidation()
   const inputFild = useRef()
   
   const addMore = ()=>{
      setShowOption((prev)=>{
          return !prev
      })
   }
   
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
      addToImport: selectedPage.name === 'Importent' ? true : false,
      complete: false,
      key:keyGenerator(4),
      pageNameInfo : {...selectedPage},
    }
    return toDo;
   }

   const getCurrentValue = ()=>{
      const todoValue = createNewToDo(inputValue)
      if(selectedPage.name === 'My Day'){
        // dispatchToDo(
        //    ToDoActions.addToMyDay({todoValue})
        // ) 
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'myDay',
            counter: 'toDoOnmyDay',
            todos:'myDayToDo'
         })
        )
      }else if(selectedPage.name === 'Importent'){
         dispatchToDo(
            ToDoActions.addToDo(
               {
                  todoValue,
                  objectKey: 'importent',
                  counter: 'toDoOnImportent',
                  todos:'importentToDo'
               }
            )
         )
      }else if(selectedPage.name === 'Work'){
        // dispatchToDo(
        //    //ToDoActions.addToWork({todoValue})
        // )
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'work',
            counter : 'toDoOnWork',
            todos : 'workToDo'
         })
        )
      }else if (selectedPage.name === 'Reminder'){
        //dispatchToDo(
        //   ToDoActions.addToRiminder({todoValue})
        //)
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'riminder',
            counter : 'todoOnRiminder',
            todos : 'riminderToDo'
         })
        )
      }else if (selectedPage.name === 'Tasks'){
        //dispatchToDo(
        //   ToDoActions.addToTasks({todoValue})
        //)
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'tasks',
            counter : 'todoOnTasks',
            todos : 'taskToDo'
         })
        )
      }else if (selectedPage.name === "Planned"){
        // dispatchToDo(
        //    ToDoActions.addToPlanned({todoValue})
        // )
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'planned',
            counter : 'todoOnPlanned',
            todos : 'plannedToDo'
         })
        )
      }else if ( selectedPage.name === 'Assigned to me'){
        // dispatchToDo(
        //    ToDoActions.addToAssigned({todoValue})
        // )
        dispatchToDo(
         ToDoActions.addToDo({
            todoValue,
            objectKey: 'assignedToMe',
            counter : 'todoOnAssigned',
            todos : 'assignedToMeToDo'
         })
        )
      }
      inputFild.current.value = ''
      setDisabledButton(true)
   }


   return(
      <Container style={`${style['input-section-main']} ${currentColorThem.mainBackground === '#11100F' ? style['wite-box-shadow']: style['black-box-shadow']}`} fontColor={'fontColor'}>
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
         <Button buttonProps={style['more-button']} functionHandeler={addMore}>
            <i className="bi bi-three-dots-vertical"></i>
         </Button>
         {showOption ?  <Container 
         backgroundColor={'mainBackground'}
         style={`${style['option-box']}`} 
         animation={{opasity: 1, y:-40,}}
         initial={{opasity: 0 ,y: -25,}}
         durationValue={0.1}>
            <Button>
              <i className="bi bi-bell"></i>
            </Button>
            <Button>
               
            </Button>
            <Button>
               
            </Button>
         </Container>: null}

      </Container>
   )
}


export default InputSection;