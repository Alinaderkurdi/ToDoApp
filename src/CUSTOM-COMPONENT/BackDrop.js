import React from 'react';
import style from './BackDrop.module.css';
import Button from './Button';
import { motion } from 'framer-motion/dist/framer-motion';




const BackDrop = (props)=>{
    
    return(
        <motion.div className={style['back-drop-style']} onClick={props.functionPointer}
        animate={props.animation}
        initial={props.initial}
        transition={{duration:props.durationValue}}>
        {props.children} 
        </motion.div>
    )
}


export default BackDrop;