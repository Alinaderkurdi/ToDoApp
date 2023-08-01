 
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'
//import { useSelector } from 'react-redux';



const Container = (props) =>{
    //console.log(props.animation)
    //console.log(props.inlineStyle)
   // const themeBackground = useSelector(state => state.colortheme)
 //   const { inlineStyle , fontColor } = props
   // const keyName = inlineStyle 
   // const fontKey = fontColor

  
    return(
        <motion.div className={props.style}
         animate={props.animation}
         initial={props.initial}
         transition={{duration:props.durationValue}}
        >
        {props.children}
        </motion.div>
       
    )
    
}


export default Container;