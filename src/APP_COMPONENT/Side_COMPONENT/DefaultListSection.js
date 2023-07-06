import React from 'react';

import style from './DefaultListSection.module.css';
import Container from '../../CUSTOM-COMPONENT/Container';

import Button from '../../CUSTOM-COMPONENT/Button';

const DefaultListSection = ()=>{
    return(
        <Container style={style['default-list-main']}>
            <Button buttonProps={style['my-day-button']}>
                <i className="bi bi-brightness-high"></i>
                <p className={style['section-name']}>My Day</p>
                <p className={style['item-counter']}>5</p>
            </Button>

        </Container>
    )
}

export default DefaultListSection;