import React from 'react';
import classes from './PageButton.module.css';
import Container from '../../../CUSTOM-COMPONENT/Container';

const PageButton = (props)=>{
   
   const getLinkButtonData = (event)=>{
     event.preventDefault()
     console.log(event.target.closest('a').href)
     console.log(props)
   }

    return(
            <a className={classes['link-button']} href='http://localhost:3000/myday' onClick={getLinkButtonData}>
              <i className={`bi ${props.iconName}`}style={{color: props.iconColor,fontSize: '1.3rem'}}></i>
             <p className={classes['section-name']} >
                {props.SectionName}
             </p>
             <p className={classes['to-do-counter']}>
               {props.toDoCounter}
             </p>
            </a>
    )
}


export default PageButton;