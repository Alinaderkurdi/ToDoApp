import React from 'react';
import Container from '../../../../../CUSTOM-COMPONENT/Container';
import style from './NoneContentPage.module.css';


const NoneContentPage = ()=>{

    return(
        <Container style={style['none-content-main']}>
            <h1>
                dummy text to show when there is no content
            </h1>

        </Container>
    )
}

export default NoneContentPage;