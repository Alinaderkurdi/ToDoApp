import React, {useState} from 'react'; 

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './SingleToDo.module.css';
import {useSelector} from 'react-redux'
//import MoreOption from './SINGEL-TODO-COMPONENT/MoreOption';//
import MoreOption from './singel-todo-component/MoreOption'
import BackDrop from '../../../CUSTOM-COMPONENT/BackDrop';
import ReactDOM from 'react-dom'
import useAddBoxShadow from '../../../CUSTOM-HOOKS/useAddBoxShadow';

const SingleToDo = (props)=>{
    const boxShadow = useAddBoxShadow()
   // console.log(props)
    const [showSingelTodoOption, setshowSingelTodoOption] = useState(false)
    const toDoInfo =  props.todoData.todoValue.pageNameInfo;
    const currentThemColor = useSelector(state => state.them)
   // console.log(currentThemColor)
    const [iscomplete, iscompleteUpdater] = useState(props.todoData.todoValue.complete)
    const [importTent, ImportentUpdater]  = useState(props.todoData.todoValue.addToImport)

    const showTodoOption = ()=>{
        setshowSingelTodoOption ( prev => ! prev)
      //  console.log(props.todoData.todoValue)
    }

    const completeToDo = ()=>{
        iscompleteUpdater(true)
    }

    const addToImportent = ()=>{
        ImportentUpdater(true)
    }

    return (
        <Container style={`${style['singel-to-do-ontainer']}`} 
        animation={{opasity: 1, y: 2, scale:1}}
        initial={{opasity: 0.5 ,y:-1, scale: 0.8}}
        durationValue={0.2}
        backgroundColor={'secondrayColor'}
        fontColor={'sideFontColor'}>
        
            <Button buttonProps={style['complete-button']} functionHandeler={completeToDo}>
                {iscomplete ? <i className="bi bi-check-circle-fill"></i> : null}
            </Button>
            <p className={`${style['text-holder']} ${iscomplete ? style['complete-todo'] : ''}`}>
              {props.todoData.todoValue.content}
            </p>
            <Button buttonProps={style['import-button']} functionHandeler={addToImportent}>
               {importTent ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}
            </Button>
            <div className={style['option-box']}>
             <i className={`bi ${toDoInfo.sectionLogo}`} style={{color:toDoInfo.iconColor}}></i>
             <p className={style['page-name']}>{toDoInfo.name}</p>
             <Button buttonProps={style['more-button']} functionHandeler={showTodoOption}>
                {showSingelTodoOption ?  <i className="bi bi-x"></i> :  <i className="bi bi-three-dots"></i>}
             </Button>
             {showSingelTodoOption ? ReactDOM.createPortal(<BackDrop  functionPointer={showTodoOption}/> , document.getElementById('back-drop-section')) : null}
             {showSingelTodoOption ? ReactDOM.createPortal(<MoreOption  data={props.todoData}/>, document.getElementById('setting-section')) : null}
            </div>
        </Container>
    )
}

export default SingleToDo;