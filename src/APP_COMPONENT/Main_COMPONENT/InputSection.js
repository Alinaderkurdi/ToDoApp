import React from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './InputSection.module.css';
import GetValue from './GetValue';


const InputSection = (props)=>{
   
    const addDate = ()=>{
        const date = new Date()
        const time = [date.getHours().toString(), date.getMinutes().toString(), date.getDay(), date.getSeconds().toString()]
        const  [ hours, minutes ] = time
        return [`${hours}:${minutes}`, time[2],time[3]]
    }

    const keyGenerator = (keylenght)=>{
        const string = '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik9ol0p';
        let result =''
        let lenghtKey = keylenght;
        for(let i = 0; i < lenghtKey ; i++){
          result += string.charAt(Math.floor(Math.random() * lenghtKey))
        }
        return  result
    }

    const getValue = (inputValue)=>{
        const todoData = {
            text : inputValue,
            date : addDate(),
            uniqueKey : keyGenerator(4)
        }
        
        props.onGetFromChild(todoData)
    }

    return(
       <Container style={style['input-section-main']}>
        <GetValue  onGetData={getValue} />
       </Container>
    )
}


export default InputSection;