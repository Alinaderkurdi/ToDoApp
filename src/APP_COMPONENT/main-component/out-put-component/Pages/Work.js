import React from 'react';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './PageGlobalStyle.module.css';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUSTOM-HOOKS/useRenderItem'
import Button from '../../../../CUSTOM-COMPONENT/Button';




const Work = ()=>{
    const work = useSelector(state => state.todo.work)
    let [outPut, reanderDeleteAllButton, deleteAll] = useReanderItem(work)
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

export default Work;