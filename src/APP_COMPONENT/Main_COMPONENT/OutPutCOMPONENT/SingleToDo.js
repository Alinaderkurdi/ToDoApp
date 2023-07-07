import React from 'react'; 

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './SingleToDo.module.css';

const SingleToDo = ()=>{
    return (
        <Container style={style['singel-to-do-ontainer']}>
            <Button buttonProps={style['complete-button']}>

            </Button>
            <p className={style['text-holder']}>
               don't be a overthink
            </p>
            <Button buttonProps={style['import-button']}>
               <i className={"bi bi-star"}></i>
            </Button>
        </Container>
    )
}

export default SingleToDo;