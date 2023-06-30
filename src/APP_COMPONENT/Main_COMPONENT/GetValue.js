import React , { useState, useref }from 'react';
import style from './GetValue.module.css';
import Button from '../../CUSTOM-COMPONENT/Button';


const GetValue = ()=>{
  

  const getUserValue = (e)=>{
     
  }
    
    return(
            <>
              <input className={style['input-fild']} placeholder='Create a new todo'/>
              <Button buttonProps={style['add-button']} functionHandeler={getUserValue}>
              <i className='bi bi-plus-lg'></i>
              </Button>
            </>
    )
}


export default GetValue;