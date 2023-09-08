import React , { useState} from "react";
import Container from "../../../../CUSTOM-COMPONENT/Container";
import style from './ReminderTimeBox.module.css';
import useGetTime from "../../../../CUSTOM-HOOKS/useGetTime";




const ReminderTimeBox = ()=>{
    const [ hours, minutes ] = useGetTime()
    console.log(hours)
    //console.log(meridiem)
    const [ currentHours, setHours] = useState( hours)
    const [ currentMinute , setMinuts] = useState(minutes)


    const incrementMinutes = ()=>{

    }

    return(
        <Container style={style['time-box-main']}>
            <input  type='number' 
            className={style['hours-input']} 
            defaultValue={currentHours}
            maxLength={2}/>
            <p>:</p>
            <p className={style['time-second']}>
               {currentMinute}
            </p>
            <p>
             pm
            </p>
        </Container>
    )
}

export default ReminderTimeBox;