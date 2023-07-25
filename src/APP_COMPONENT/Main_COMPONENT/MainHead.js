import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Container from '../../CUSTOM-COMPONENT/Container';
import Button from '../../CUSTOM-COMPONENT/Button';
import style from './MainHead.module.css';
import MainDisplayDate from './MainHeadCOMPONENT/MainDisplayDate';
import ColorThemSection from './ColorThem_COMPONENT/ColorThemSection';


//<Button buttonProps={style['add-background-bt']}></Button>
///{ReactDOM.createPortal(<ColorThemSection />, document.getElementById('setting-section'))}



const MainHead = ()=>{
  
  const [ settingPageState , setSettingPageState ] = useState(false)

  const openSettingSection = ()=>{
    setSettingPageState((prev) => !prev)
  }
   
  return (
    <Container style={style['main-head']}>
      <MainDisplayDate />
      <Button buttonProps={style['color-them-button']} functionHandeler={openSettingSection}>
       {settingPageState ? <i className="bi bi-x"></i> : <i className="bi bi-three-dots"></i>} 
      </Button>
      {settingPageState ? ReactDOM.createPortal(<ColorThemSection />, document.getElementById('setting-section')) :  null}
    </Container>
  )
}

export default MainHead;