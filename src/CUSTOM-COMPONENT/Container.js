 
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
  const backGroundPeroperty = themeBackground.typeOfBackground === 'IMAGE' && props.addImg ? 'background-image' : 'background';
    
  return(
      <motion.div className={props.style}
       animate={props.animation}
       initial={props.initial}
       transition={{duration:props.durationValue}}
       style={{
        [backGroundPeroperty] : themeBackground.typeOfBackground === 'IMAGE' && props.addImg ? `url(${require(`../img-beakground/${themeBackground.mainBackground}`)}` : themeBackground[backgroundKey],
        color: themeBackground[fontColorKey]
        }}>
          {props.children}
      </motion.div>
     
  )
    
}


export default React.memo(Container)