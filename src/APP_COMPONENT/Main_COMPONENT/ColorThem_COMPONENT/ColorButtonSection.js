import React from 'react';

import Container from '../../../CUSTOM-COMPONENT/Container';
import Button from '../../../CUSTOM-COMPONENT/Button';
import style from './ColorButtonSection.module.css';
import { useDispatch } from 'react-redux';
import { changeThemAction } from '../../../STORE/SLICES/color-them'


//to get diffrent color value and assigend them to diffrent part of ui i saparate each color value by 
//split method and create a array every lenght of array reparesent of diffrent color value ie : #5D72BC: mainbackground,#E7ECF0:secandarybackground,#ffffff:main font,#000000:sidefont color

const ColorButtonSection = ()=>{
    const dispatchColorThem = useDispatch()
    const themValueSeparator = (colorsThem)=>{
        return colorsThem.split(',')
    }

    const getCurrentColor = (e)=>{
        const [mainColorThem, secondaryColor, fontColor, sideFontColor]  = themValueSeparator(e.target.value)
        dispatchColorThem(changeThemAction.changeThem({
            mainColor : mainColorThem,
            fontColor : fontColor,
            secondrayColor : secondaryColor,
            sideFontColor,
            backGroundType : 'COLOR'
        }))
    }

    return (
        <Container style={style['button-color-section']}>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#5D72BC'}}
             buttonValue={'#5D72BC,#E9E8E8,#ffffff,#000000'}
             functionHandeler={getCurrentColor}
            >
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#9C5F9E'}} 
             buttonValue={'#9C5F9E,#E9E8E8,#FFFFFF,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#BF4E6D'}}
              buttonValue={'#BF4E6D,#E9E8E8,#FFFFFF,#000000'}
              functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']} 
             inlineProperty={{background: '#C0504D'}} 
             buttonValue={'#C0504D,#E9E8E8,#FFFFFF,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#2F825E'}}
             buttonValue={'#2F825E,#E9E8E8,#FFFFFF,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#2A817C'}}
             buttonValue={'#2A817C,#E9E8E8,#FFFFFF,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#687680'}}
             buttonValue={'#687680,#E9E8E8,#FFFFFF,#000000'}
             functionHandeler={getCurrentColor}
            >
                
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F2E7F9'}}
             buttonValue={'#F2E7F9,#FFFFFF,#000000,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#FFE4E9'}}
             buttonValue={'#FFE4E9,#FFFFFF,#000000,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F9E8DE'}}
             buttonValue={'#F9E8DE,#FFFFFF,#000000,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#E7ECF0'}}
             buttonValue={'#E7ECF0,#FFFFFF,#000000,#000000'}
             functionHandeler={getCurrentColor}
            >
            
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#F2E7F9'}}
             buttonValue={'#F2E7F9,#FFFFFF,#000000,#000000'}
             functionHandeler={getCurrentColor}
            >
            </Button>
            <Button buttonProps={style['color-button']}
             inlineProperty={{background: '#11100F'}}
             buttonValue={'#11100F,#1F1F1F,#ffff,#FFFFFF'}
             functionHandeler={getCurrentColor}
            >
            </Button>
        </Container>
        //add this color : #182533 
    )
}


export default ColorButtonSection;