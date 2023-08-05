 
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'
import { useSelector } from 'react-redux';

//console.log(props.animation)
//console.log(props.inlineStyle)
//style={{['background-color']: []}}

const Container = (props) =>{
  const themeBackground = useSelector(state => state.them)
  const backgroundKey = props.backgroundColor;
  const fontColorKey  = props.fontColor;
  console.log(themeBackground.typeOfBackground)
    
  return(
      <motion.div className={props.style}
       animate={props.animation}
       initial={props.initial}
       transition={{duration:props.durationValue}}
       style={{
       ['background'] : themeBackground[backgroundKey],
        color: themeBackground[fontColorKey]
        }}>
          {props.children}
      </motion.div>
     
  )
    
}


export default Container;