import React from 'react';
import classes from './PageButton.module.css';
import { useDispatch } from 'react-redux';
import Container from '../../../CUSTOM-COMPONENT/Container';
import { sectionAction} from '../../../STORE/SLICES/stection-name'
import  {useSelector} from 'react-redux';


const PageButton = (props)=>{
  const {SectionName, iconColor, iconName} = props
  const sideFontColor = useSelector(state => state.them.sideFontColor)
  const themColor = useSelector(state => state.them)

  
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
          <div className={`${classes['link-button']} ${themColor.mainBackground === '#11100F' ? classes['link-button-darke'] : classes['link-button-light']}`} onClick={getlingButtonInfo}>
            <i className={`bi ${props.iconName}`}style={{
              fontSize: '1.3rem',
              color: props.iconColor
            }}>

            </i>
            {props.children}
            <p className={classes['section-name']} style={{color: sideFontColor}}>
              {props.SectionName}
           </p>
           <p className={classes['to-do-counter']} style={{color: sideFontColor}}>
             {props.toDoCounter}
           </p>
          </div>
  )
}


export default PageButton;