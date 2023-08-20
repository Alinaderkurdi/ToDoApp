
import React,{ useState } from 'react'
import style from './SwitchCheckBox.module.css'




//solve the problem of switch font color use selctor and add font color to div element and
// in element use inharitent

//

const SwitchCheckBox = (props)=>{
  const [ isActive , setActive ] = useState(props.config.isEnable)
  const getValue = (e)=>{
   // console.log(e.target.value)
   //  console.log(e.target.checked)
    setActive(prev => !prev)
    props.onGet({
      settingName: e.target.value,
      settingNewState : e.target.checked
    })
  }

  return(
    <div className={style['switch-holder']}>
      <input type="checkbox"
       id={props.switchId}
       className={style['switch-button']}
       value={props.config.settingId} 
       onChange={getValue}
       checked={isActive}
       />
      <label htmlFor={props.switchId} className={style['lable-style']}>Toggle</label>
      <label className={style['switch-text-holder']}>{props.laelText}</label>
    </div>
  )
}

export default SwitchCheckBox;