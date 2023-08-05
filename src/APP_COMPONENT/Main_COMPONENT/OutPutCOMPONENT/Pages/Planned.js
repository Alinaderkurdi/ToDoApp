import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux';
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';

const Planned = ()=>{
    const planned = useSelector(state => state.todo.planned)
    const outPut = useReanderItem(planned)
    return (
        <Container style={style['continer-main']}>
            {outPut}
        </Container>
    )
}
///bug render uncorectly todos

export default Planned;