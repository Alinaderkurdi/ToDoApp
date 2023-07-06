import React from 'react';

import style from './UserProfileImage.module.css';
import Container from '../../CUSTOM-COMPONENT/Container';



const UserProfileImage = ()=>{
    return(
        <Container style={style['image-holder-contaner']}>
            <div className={style['image-holder']}>

            </div>

        </Container>
    )
}

export default UserProfileImage;