import React from 'react';
import style from  './App.module.css';
import Container from './CUSTOM-COMPONENT/Container';
//import Head from './APP_COMPONENT/Head';
import Main from './APP_COMPONENT/Mian';
import SideSection from './APP_COMPONENT/SideSection';

function App() {
  return (
    <div className={style.App}>
      <Container style={style['main-container']}>
        <SideSection />
        <Main />
      </Container>
    </div>
  );
}

export default App;
