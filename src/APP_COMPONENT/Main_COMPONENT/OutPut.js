import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './OutPut.module.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Importent from './OutPutCOMPONENT/Pages/Importent';
import Work from './OutPutCOMPONENT/Pages/Work';
import MyDay from './OutPutCOMPONENT/Pages/MyDay';
import Reminder from './OutPutCOMPONENT/Pages/Reminder';
import Tasks from './OutPutCOMPONENT/Pages/Tasks';
import AssigendToMe from './OutPutCOMPONENT/Pages/AssigendToMe';
import Planned from './OutPutCOMPONENT/Pages/Planned';


const OutPut = ()=>{
  
  return(
    <Container style={`${style['out-put-main']}`}>
      <Routes>
        <Route path='/' element={<MyDay />}></Route>
        <Route path='*' element={<MyDay/>}></Route>
        <Route  path='/importent'element={<Importent />}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/reminder' element={<Reminder />}></Route>
        <Route path='/tasks' element={<Tasks />}></Route>
        <Route path='/assigendToMe' element={<AssigendToMe />}></Route>
        <Route path='/planned' element={<Planned />}></Route>
     </Routes>
    </Container>

  )
}

export default OutPut;