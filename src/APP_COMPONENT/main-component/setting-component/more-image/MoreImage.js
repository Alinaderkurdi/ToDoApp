
import React from 'react';

import Container from '../../../../CUSTOM-COMPONENT/Container';
import Button from '../../../../CUSTOM-COMPONENT/Button';
import style from './MoreImage.module.css';
import { useDispatch } from 'react-redux';
import { changeThemAction } from '../../../../STORE/SLICES/color-them';
import Image from '../../../../CUSTOM-COMPONENT/Image';


const MoreImage = ()=>{
    const dispatch = useDispatch()
    
    const getImage = (image)=>{
        console.log(image)
       dispatch(changeThemAction.addImage({
        backgroundUrl : image,
        backgroundType : 'IMAGE'
       }))
       //dispatch action here 
    }

    return(
        <Container 
        style={style['more-image-section']}
        animation={{opasity: 1, y: -5}}
        initial={{opasity: 0 ,y: -10}}
        durationValue={0.3} >
            <Image  style={style['image-holder']} imageName={'pexels-walid-ahmad-1509582.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-zukiman-mohamad-398467.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-shahid-tanweer-1365109.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-sameera-madusanka-1666529.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-pixabay-237321.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-magova-772520.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-trace-hudson-2471261.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-tausif-hossain-1226302.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-th-era-photography-9030684.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-curioso-photography-288100.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-scott-webb-1029604.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-pixabay-220182.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-engin-akyurt-6749428.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-rafael-cerqueira-4737522.jpg'}  functionPointer={getImage}/>
            <Image  style={style['image-holder']} imageName={'pexels-anni-roenkae-4175054.jpg'}  functionPointer={getImage}/>
        </Container>
    )
}

export default MoreImage;