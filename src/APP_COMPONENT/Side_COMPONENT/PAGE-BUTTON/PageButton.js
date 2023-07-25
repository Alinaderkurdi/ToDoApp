import React from 'react';
import classes from './PageButton.module.css';
import { useDispatch } from 'react-redux';
import Container from '../../../CUSTOM-COMPONENT/Container';


const PageButton = (props)=>{
  const { 
    SectionName : name,
    iconColor,
    iconName : sectionLogo
   } = props

  const dispatchAction =  useDispatch()

  const getlingButtonInfo = ()=>{

    dispatchAction(
      {
        type : 'CHANGE-PAGE',
        payload: {
          name,
          iconColor,
          sectionLogo
        }
      }
    )
  }
  
  return(
          <div className={classes['link-button']} onClick={getlingButtonInfo}>
            <i className={`bi ${props.iconName}`}style={{color: props.iconColor,fontSize: '1.3rem'}}>

            </i>
            {props.children}
            <p className={classes['section-name']} >
              {props.SectionName}
           </p>
           <p className={classes['to-do-counter']}>
             {props.toDoCounter}
           </p>
          </div>
  )
}


export default PageButton;