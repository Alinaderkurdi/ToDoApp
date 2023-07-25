import React from 'react';

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './ColorButtonSection.module.css';

//#5D72BC'


const ColorButtonSection = ()=>{

    const getCurrentColor = (e)=>{
        console.log(e.target.value)
        console.log(e.target)
    }

    return (
        <Container style={style['button-color-section']}>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#5D72BC'}}
             buttonValue={'#5D72BC'}
             functionHandeler={getCurrentColor}
            >
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#9C5F9E'}} 
             buttonValue={'#9C5F9E'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#BF4E6D'}}
              buttonValue={'#BF4E6D'}
              functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']} 
             inlineProperty={{background: '#C0504D'}} 
             buttonValue={'#C0504D'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#2F825E'}}
             buttonValue={'#2F825E'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#2A817C'}}
             buttonValue={'#2A817C'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#687680'}}
             buttonValue={'#687680'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F2E7F9'}}
             buttonValue={'#F2E7F9'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#FFE4E9'}}
             buttonValue={'#FFE4E9'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F9E8DE'}}
             buttonValue={'#F9E8DE'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#E7ECF0'}}
             buttonValue={'#E7ECF0'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F2E7F9'}}
             buttonValue={'#F2E7F9'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>

        </Container>
    )
}


export default ColorButtonSection;