import React from 'react';
import classes from './MainDisplay.module.css';
import Container from '../../../CUSTOM-COMPONENT/Container';
import { useSelector } from 'react-redux';

const MainDisplayDate = ()=>{
    const selectedPage =  useSelector( state => state.stctionName)
    console.log(selectedPage)
    const iconColor = selectedPage.iconeColor;

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
             {selectedPage.name}
            </h1>
            <i style={{ color:selectedPage.iconColor}} className={`bi ${`${selectedPage.sectionLogo}`} ${classes['icon-style']}`}>

            </i>
            <p className={classes['disply-date']}>{`${getDate()[1]} ,${getDate()[0]} ,${getDate()[2]}`}</p>
        </Container>
    )
}


export default MainDisplayDate;