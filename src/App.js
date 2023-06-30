import React from 'react';
import style from  './App.module.css';
import Container from './CUSTOM-COMPONENT/Container';
import Head from './APP_COMPONENT/Head';
import Main from './APP_COMPONENT/Mian';

function App() {
  return (
    <div className={style.App}>
      <Container style={style['main-container']}>
        <Head></Head>
        <Main></Main>
      </Container>

    </div>
  );
}

export default App;
