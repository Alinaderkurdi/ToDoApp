
import React, { useState } from 'react';
import Button from '../../../CUSTOM-COMPONENT/Button';
import Container from '../../../CUSTOM-COMPONENT/Container';
import style from './ImageButtonSection.module.css';
import MoreImage from './MORE-IMAGE/MoreImage';
import { useDispatch } from 'react-redux';
import { changeThemAction } from '../../../STORE/SLICES/color-them';
import Image from '../../../CUSTOM-COMPONENT/Image';




//solve the problem of get user image

const ImageButtonSection = ()=>{
    const [showMoreImage, setShowMoreImage] = useState(false)
    const dispatch = useDispatch()

    const getSelectedImage = (imageName)=>{
        dispatch(changeThemAction.addImage({
            backgroundUrl : imageName,
            backgroundType : 'IMAGE',
        }))
    }

    const togelshowMoreImage = ()=>{
        setShowMoreImage( prev => !prev)
    }

    return(
        <Container style={style['image-button-section']}>
            <Image  style={style['image-holder']} imageName={'pexels-walid-ahmad-909656.jpg'}  functionPointer={getSelectedImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-adrien-olichon-2387793.jpg'}  functionPointer={getSelectedImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-mohan-reddy-4388593.jpg'}  functionPointer={getSelectedImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-johannes-plenio-1133506.jpg'}  functionPointer={getSelectedImage}/>
            <Button 
            buttonProps={style['show-more-image']}
            functionHandeler={togelshowMoreImage}>
              {showMoreImage ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
            </Button>
            {showMoreImage ?  <MoreImage /> : null}
        </Container>
    )
}


export default ImageButtonSection;