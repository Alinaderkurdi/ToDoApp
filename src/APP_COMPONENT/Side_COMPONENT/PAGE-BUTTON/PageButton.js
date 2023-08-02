import React from 'react';
import classes from './PageButton.module.css';
import { useDispatch } from 'react-redux';
import Container from '../../../CUSTOM-COMPONENT/Container';
import { sectionAction} from '../../../STORE/SLICES/stection-name'


const PageButton = (props)=>{
  const {SectionName, iconColor, iconName} = props
  
  const dispatchAction =  useDispatch()

  const getlingButtonInfo = ()=>{
    dispatchAction(
      sectionAction.changePage({
        SectionName,
        iconColor,
        iconName,
      })
    )
  }
  

  return(
          <div className={classes['link-button']} onClick={getlingButtonInfo}>
            <i className={`bi ${props.iconName}`}style={{
              fontSize: '1.3rem',
              color: props.iconColor
            }}>

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