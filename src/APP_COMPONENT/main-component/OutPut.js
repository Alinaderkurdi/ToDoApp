import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './OutPut.module.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Importent from './out-put-component/Pages/Importent';//
import Work from './out-put-component/Pages/Work';//
import MyDay from './out-put-component/Pages/MyDay';//
import Reminder from './out-put-component/Pages/Reminder';//
import Tasks from './out-put-component/Pages/Tasks';//
import AssigendToMe from './out-put-component/Pages/AssigendToMe';//
import Planned from './out-put-component/Pages/Planned';//


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