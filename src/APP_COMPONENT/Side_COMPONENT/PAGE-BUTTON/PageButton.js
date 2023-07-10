import React from 'react';
import classes from './PageButton.module.css';
import Container from '../../../CUSTOM-COMPONENT/Container';

const PageButton = (props)=>{

    return(
            <a className={classes['link-button']} href='../../'>
              <i className={`bi ${props.iconName}`}style={{color: props.iconColor,fontSize: '1.3rem'}}>

              </i>
              {props.children}
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