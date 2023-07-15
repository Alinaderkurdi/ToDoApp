import React from 'react';

import classes from './MainDisplay.module.css';

import Container from '../../../CUSTOM-COMPONENT/Container';

const MainDisplayDate = ()=>{
    // My Day <i className="bi bi-brightness-high"></i>
    //line 48 need to add inline style!!!
    const date = new Date()
    const months= [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const weekDayName = [
        'SunDay',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const getDate = ()=>{
      const month = date.getMonth()
      const currentMonth = months[month]
      const days = date.getDate().toString()
      const dayOnWeake = date.getDay()
      return  [ currentMonth,  weekDayName[dayOnWeake], days]
    }

    return (
        <Container style={classes['display-main']}>
            <h1 className={classes['app-section-name']}>
             My Day
            </h1>
            <i className={`bi ${'bi-brightness-high'} ${classes['icon-style']}`}>
            </i>
            <p className={classes['disply-date']}>{`${getDate()[1]} ,${getDate()[0]} ,${getDate()[2]}`}</p>
        </Container>
    )
}


export default MainDisplayDate;