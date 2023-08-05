
import React from 'react';
import Container from '../../../CUSTOM-COMPONENT/Container';
import style from './ColorThemSection.module.css';
import Button from '../../../CUSTOM-COMPONENT/Button';
import ColorButtonSection from './ColorButtonSection';
import ImageButtonSection from './ImageButtonSection';
//import { motion } from 'framer-motion/dist/framer-motion'
import { useSelector } from 'react-redux';




const ColorThemSection = ()=>{
    const themeBackground = useSelector(state => state.colortheme)
    //console.log(themeBackground)

    return(
        <Container style={style['color-them']}
        animation={{opasity: 1, y: 0, scale:1}}
        initial={{opasity: 0 ,y: -20, scale: 0}}
        durationValue={0.1}
        >
            <p className={style['color-them-section-name']}>
               Pick a Theme
            </p>
            <ColorButtonSection />
            <ImageButtonSection />
        </Container>
    )
}

export default ColorThemSection;