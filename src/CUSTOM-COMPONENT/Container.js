 
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'


const Container = (props) =>{
    //console.log(props.animation)
    return(
        <motion.div className={props.style}
         animate={props.animation}
         initial={props.initial}
        >
        {props.children}
        </motion.div>
       
    )
    
}


export default Container;