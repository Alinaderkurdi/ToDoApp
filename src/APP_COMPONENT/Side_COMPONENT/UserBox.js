import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style  from './UserBox.module.css';
import UserProfileImage from './UserProfileImage';
import  {useSelector} from 'react-redux';


const UserBox = ()=>{

    const sideFontColor = useSelector(state => state.them.sideFontColor)

    return(
        <Container style={style['user-box-main']}>
            <UserProfileImage>

            </UserProfileImage>
            <p className={style['user-name']} style={{color: sideFontColor}}>
               Ali Naderkurdi
            </p>
            <p className={style['gmail-addres']} style={{color: sideFontColor}}>
                ali.naderkurdi@gmail.com
            </p>

        </Container>
    )
}

export default UserBox;