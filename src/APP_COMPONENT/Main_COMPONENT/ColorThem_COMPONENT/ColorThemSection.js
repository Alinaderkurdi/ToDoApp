
import React from 'react';
import Container from '../../../CUSTOM-COMPONENT/Container';
import style from './ColorThemSection.module.css';
import Button from '../../../CUSTOM-COMPONENT/Button';
import ColorButtonSection from './ColorButtonSection';
import ImageButtonSection from './ImageButtonSection';
import Setting from './SETTING-SECTION/SettingSection';
import { useSelector } from 'react-redux';

//<p className={style['setting-section-name']} style={{['margin-top']: a ? '100px' : '0px'}}>
//                SETTING
//            </p>
//            <Setting />
//

const ColorThemSection = ()=>{
    //const themeBackground = useSelector(state => state.colortheme)
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
            <p className={style['setting-titel']}>
                SETTING
            </p>
            <Setting />
        </Container>
    )
}

export default ColorThemSection;