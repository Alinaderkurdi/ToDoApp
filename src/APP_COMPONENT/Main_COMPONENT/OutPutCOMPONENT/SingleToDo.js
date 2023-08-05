import React, {useState} from 'react'; 

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './SingleToDo.module.css';
import {useSelector} from 'react-redux'
//<i class="bi bi-star-fill"></i>
//<i class="bi bi-check-circle-fill"></i>
//"bi bi-star".
// style={{color: currentThemColor.fontColor}}

const SingleToDo = (props)=>{
    const toDoInfo =  props.todoData.todoValue.pageNameInfo;
    const currentThemColor = useSelector(state => state.them)
   // console.log(currentThemColor)
    const [iscomplete, iscompleteUpdater] = useState(props.todoData.todoValue.complete)
    const [importTent, ImportentUpdater]  = useState(props.todoData.todoValue.addToImport)

    const deleteToDo = ()=>{
        console.log('delete todo')
        //write a logic to show a component to show more option
    }

    const completeToDo = ()=>{
        iscompleteUpdater(true)
    }

    const addToImportent = ()=>{
        ImportentUpdater(true)
    }

    return (
        <Container style={style['singel-to-do-ontainer']} 
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
             <Button buttonProps={style['more-button']} functionHandeler={deleteToDo}>
                <i className="bi bi-three-dots"></i>
             </Button>
                
            </div>
        </Container>
    )
}

export default SingleToDo;