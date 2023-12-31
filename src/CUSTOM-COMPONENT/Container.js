 
import React from 'react';
import { motion , AnimatePresence } from 'framer-motion/dist/framer-motion'
import { useSelector } from 'react-redux';

//console.log(props.animation)
//console.log(props.inlineStyle)
//style={{['background-color']: []}}

//'background-image'

const Container = (props) =>{
  const themeBackground = useSelector(state => state.them)
  const backgroundKey = props.backgroundColor;
  const fontColorKey  = props.fontColor;
  const backGroundPeroperty = themeBackground.typeOfBackground === 'IMAGE' && props.addImg ? 'backgroundImage' : 'background';

  //console.log(backgroundKey)
  let a = '#93a5cf'
  let b = '#e4efe9'

  const backGroundSelctor = ()=>{
    
    if(themeBackground.typeOfBackground === 'IMAGE' && props.addImg){
      console.log('1')
      return  `url(${require(`../img-beakground/${themeBackground.mainBackground}`)}`
    }
    if(backgroundKey === 'secondrayColor' && props.addImg){
      return `linear-gradient(${a},${b})`
    }
    
    return  themeBackground[backgroundKey]

  }
    
  return(
    <AnimatePresence>
      <motion.div className={props.style}
       animate={props.animation}
       initial={props.initial}
       transition={{duration:props.durationValue}}
       exit={{ x: -300, opacity: 0}}
       style={{
       // [backGroundPeroperty] : themeBackground.typeOfBackground === 'IMAGE' && props.addImg ? `url(${require(`../img-beakground/${themeBackground.mainBackground}`)}` : themeBackground[backgroundKey],
       // [backGroundPeroperty] :  backGroundSelctor(),
        [backGroundPeroperty] : backGroundSelctor(),
        color: themeBackground[fontColorKey]
        }}>
          {props.children}
      </motion.div>
    </AnimatePresence>
  )
    
}


export default React.memo(Container)