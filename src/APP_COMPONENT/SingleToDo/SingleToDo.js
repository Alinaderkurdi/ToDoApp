import React from 'react'; 

import Container from '../../CUSTOM-COMPONENT/Container';
import Button from '../../CUSTOM-COMPONENT/Button';
import style from './SingleToDo.module.css';

const SingleToDo = ()=>{
    return (
        <Container style={style['singel-to-do-ontainer']}>
            <p className={style['text-holder']}>
                hello world
            </p>
            <p className={style['date-holder']}>
               22:10
            </p>
            <Button buttonProps={style['completed-button']}>
                
            </Button>
        </Container>
    )
}

export default SingleToDo;