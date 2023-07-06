import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style  from './UserBox.module.css';
import UserProfileImage from './UserProfileImage';



const UserBox = ()=>{
    return(
        <Container style={style['user-box-main']}>
            <UserProfileImage>

            </UserProfileImage>
            <p className={style['user-name']}>
               Ali Naderkurdi
            </p>
            <p className={style['gmail-addres']}>
                ali.naderkurdi@gmail.com
            </p>

        </Container>
    )
}

export default UserBox;