import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';
import { useSelector } from 'react-redux';
import Button from '../../../../CUSTOM-COMPONENT/Button';


const Reminder = ()=>{
    const reminder = useSelector(state => state.todo.riminder)
    let [outPut, reanderDeleteAllButton, deleteAll] = useReanderItem(reminder)
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



export default Reminder;
