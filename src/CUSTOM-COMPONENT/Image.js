import React from 'react';
import style from './Image.module.css'

const Image = (props)=>{
    
    const imgSrc = props.imageName

    const getImageInfo = ()=>{
        props.functionPointer(imgSrc)
    }

    return(
        <img className={props.style}
         src={require(`../img-beakground/${props.imageName}`)} 
         onClick={getImageInfo}> 
        </img>
    )
}

export default Image;