import React from "react";
import Button from "../../../CUSTOM-COMPONENT/Button";
import Container from "../../../CUSTOM-COMPONENT/Container";
import style from './GetReminder.module.css';
import ReminderTimeBox from "./show-reminder-time/ReminderTimeBox";
import globalStyle from '../../GLOBAL-STYLE/ButtonStyle.module.css';



const GetReminder = ()=>{
    


    return(
        <Container 
        style={style['get-reminder-main']}
        fontColor={'fontColor'}>
            <Button 
            buttonProps={`${style['reminder-config-button']} ${globalStyle['button-style-global']}`}
            >
               <i className="bi bi-plus"></i>
            </Button>
            <ReminderTimeBox />
            <Button 
            buttonProps={`${style['reminder-config-button']} ${globalStyle['button-style-global']}`}
            >
              <i className="bi bi-dash"></i>
            </Button>
        </Container>
    )
}

export default GetReminder;