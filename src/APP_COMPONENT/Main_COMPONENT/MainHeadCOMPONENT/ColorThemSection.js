import React from 'react';

import Container from '../../../CUSTOM-COMPONENT/Container';
import clasess from './ColorThemSection.module.css';
import Button from '../../../CUSTOM-COMPONENT/Button';
import ImageBackground from './ImageBackground';


const ColorThemSection = ()=>{

    const getSelectedBackground = (e)=>{
      console.log(e.target.value)
    }
    

    return(
        <Container style={clasess['color-them-main']}>
            <p className={clasess['section-titel']}>
               Theme
            </p>
            <div className={clasess['them-section']}>
                <Button buttonProps={clasess['button-them']} cssValue={'#687680'} buttonValue={'#687680'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#E6C8E6'} buttonValue={'#E6C8E6'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#FFE4E9'} buttonValue={'#FFE4E9'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#E7ECF0'} buttonValue={'#E7ECF0'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#D4F1EF'} buttonValue={'#D4F1EF'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#D5F1E5'} buttonValue={'#D5F1E5'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#F9E8DE'} buttonValue={'#F9E8DE'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#338D88'} buttonValue={'#338D88'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#677BCA'} buttonValue={'#677BCA'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#CC5753'} buttonValue={'#CC5753'} functionHandeler={getSelectedBackground}>

                </Button>
                <Button buttonProps={clasess['button-them']} cssValue={'#D45E7E'} buttonValue={'#D45E7E'} functionHandeler={getSelectedBackground}>

                </Button>
            </div>
            <ImageBackground />

        </Container>
    )
}

export default ColorThemSection;