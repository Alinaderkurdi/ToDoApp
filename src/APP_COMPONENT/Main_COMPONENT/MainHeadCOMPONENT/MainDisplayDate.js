import React from 'react';

import style from './MainDisplay.module.css';

import Container from '../../../CUSTOM-COMPONENT/Container';

const MainDisplayDate = ()=>{
    // My Day <i className="bi bi-brightness-high"></i>
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
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'SunDay'
    ]

    const getCurrentDate = ()=>{
      const month = date.getMonth()
      const currentMonth = months[month]
      const days = date.getDate().toString()
      const dayOnWeake = date.getDay()
      return  [ currentMonth,  weekDayName[dayOnWeake -1], days]
    }

    return (
        <Container style={style['display-main']}>
            <h1 className={style['app-section-name']}>
             My Day
            </h1>
            <p className={style['disply-date']}>{`${getCurrentDate()[1]} ,${getCurrentDate()[0]} ,${getCurrentDate()[2]}`}</p>
        </Container>
    )
}


export default MainDisplayDate;