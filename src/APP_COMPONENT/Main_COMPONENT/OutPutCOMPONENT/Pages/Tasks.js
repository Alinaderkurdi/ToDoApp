import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux'
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';
import Button from '../../../../CUSTOM-COMPONENT/Button';


const Tasks = ()=>{
    const tasks = useSelector(state => state.todo.tasks)
    let [outPut, reanderDeleteAllButton, deleteAll] = useReanderItem(tasks)
    return(
        <Container style={style['continer-main']}>
          {outPut}
          {reanderDeleteAllButton ? <Button 
          buttonProps={style['delete-all-button']}
          functionHandeler={deleteAll}>
            <i className="bi bi-trash3"></i>
          </Button> : null}
        </Container>
    )
}


export default Tasks;