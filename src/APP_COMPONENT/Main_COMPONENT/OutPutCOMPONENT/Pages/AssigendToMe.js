import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import {useSelector} from 'react-redux'
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';
import Button from '../../../../CUSTOM-COMPONENT/Button';


const AssigendToMe =()=>{
    const assigendToMe = useSelector(state => state.todo.assignedToMe)
    let [outPut,reanderDeleteAllButton, deleteAll] = useReanderItem(assigendToMe)
    
    return(
        <Container style={style['continer-main']}>
            {outPut}
            {reanderDeleteAllButton ? <Button buttonProps={`${style['delete-all-button']}`} 
            functionHandeler={deleteAll}><i className="bi bi-trash3"></i></Button> : null}
        </Container>
    )
}

export default AssigendToMe;