
import React from 'react';
import Container from '../../../CUSTOM-COMPONENT/Container';
import style from './ColorThemSection.module.css';
import Button from '../../../CUSTOM-COMPONENT/Button';
import ColorButtonSection from './ColorButtonSection';
import ImageButtonSection from './ImageButtonSection';
import { motion } from 'framer-motion/dist/framer-motion'




const ColorThemSection = ()=>{

    return(
        <Container style={style['color-them']} animation={{opasity: 1, y: 0, scale:1}} initial={{opasity: 0 ,y: -20, scale: 0}}>
            <motion.p className={style['color-them-section-name']}>
               Pick a Theme
            </motion.p>
            <ColorButtonSection />
            <ImageButtonSection />
        </Container>
    )
}

export default ColorThemSection;