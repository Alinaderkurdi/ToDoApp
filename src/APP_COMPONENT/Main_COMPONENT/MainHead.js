import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Container from '../../CUSTOM-COMPONENT/Container';
import Button from '../../CUSTOM-COMPONENT/Button';
import style from './MainHead.module.css';
import MainDisplayDate from './MainHeadCOMPONENT/MainDisplayDate';
import ColorThemSection from './ColorThem_COMPONENT/ColorThemSection';
import BackDrop from '../../CUSTOM-COMPONENT/BackDrop';
import { useSelector } from 'react-redux'


//<Button buttonProps={style['add-background-bt']}></Button>
///{ReactDOM.createPortal(<ColorThemSection />, document.getElementById('setting-section'))}



const MainHead = ()=>{
  const themColor = useSelector(state => state.them)
  const [ settingPageState , setSettingPageState ] = useState(false)
  
  const openSettingSection = ()=>{
    setSettingPageState((prev) => !prev)
  }
   
  return (
    <Container style={style['main-head']} fontColor={'fontColor'}>
      <MainDisplayDate />
      <Button buttonProps={`${style['setting-button']} ${themColor.mainBackground === '#11100F' ? style['setting-button-darke']: style['setting-button-light']}`} functionHandeler={openSettingSection}>
       {settingPageState ? <i className="bi bi-x"></i> : <i className="bi bi-three-dots"></i>} 
      </Button>
      {settingPageState ? ReactDOM.createPortal(<BackDrop functionPointer={openSettingSection} durationValue={3}/>, document.getElementById('back-drop-section')) : null}
      {settingPageState ? ReactDOM.createPortal(<ColorThemSection />, document.getElementById('setting-section')) :  null}
    </Container>
  )
}

export default MainHead;

//animation
    //   initial