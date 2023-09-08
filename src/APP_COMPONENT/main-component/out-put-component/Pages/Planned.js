import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUSTOM-HOOKS/useRenderItem';
import Button from '../../../../CUSTOM-COMPONENT/Button';

const Planned = ()=>{
    const planned = useSelector(state => state.todo.planned)
    let [outPut, reanderDeleteAllButton, deleteAll] = useReanderItem(planned)

    return (
        <Container style={style['continer-main']}>
            {outPut}
            {reanderDeleteAllButton ? <Button buttonProps={style['delete-all-button']} functionHandeler={deleteAll}>
                <i className="bi bi-trash3"></i>
            </Button>: null}
        </Container>
    )
}
///bug render uncorectly todos

export default Planned;