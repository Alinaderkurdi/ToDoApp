import React from 'react';
import style from './PageGlobalStyle.module.css';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import {useSelector} from 'react-redux'
import useReanderItem from '../../../../CUTOM-HOOKS/useRenderItem';


const AssigendToMe =()=>{
    const assigendToMe = useSelector(state => state.todo.assignedToMe)
    const outPut = useReanderItem(assigendToMe)
    return(
        <Container style={style['continer-main']}>
            {outPut}
        </Container>
    )
}

export default AssigendToMe;