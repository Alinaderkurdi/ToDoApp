import React, {useState} from 'react'; 

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './SingleToDo.module.css';

//<i class="bi bi-star-fill"></i>
//<i class="bi bi-check-circle-fill"></i>
//"bi bi-star"

const SingleToDo = ()=>{

    const [iscomplete, iscompleteUpdater] = useState(false)
    const [importTent, ImportentUpdater]  = useState(false)


    const completeToDo = ()=>{
        iscompleteUpdater(true)
    }

    const addToImportent = (e)=>{
        ImportentUpdater(true)
    }

    return (
        <Container style={style['singel-to-do-ontainer']}>
            <Button buttonProps={style['complete-button']} functionHandeler={completeToDo}>
                {iscomplete ? <i className="bi bi-check-circle-fill"></i> : ''}
            </Button>
            <p className={`${style['text-holder']} ${iscomplete ? style['complete-todo'] : ''}`}>
               don't be a overthink
            </p>
            <Button buttonProps={style['import-button']} functionHandeler={addToImportent}>
               {importTent ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>}
            </Button>
            <div className={style['option-box']}>

            </div>
        </Container>
    )
}

export default SingleToDo;