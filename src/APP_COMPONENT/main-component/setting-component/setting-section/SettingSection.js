
import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../../../CUSTOM-COMPONENT/Container';
import style from './SettingSection.module.css';
import SwitchCheckBox from '../../../../CUSTOM-COMPONENT/SwitchCheckBox';
import { useSelector } from 'react-redux'
import { settingAction } from '../../../../STORE/SLICES/setting';

//add custom togel or switch button to enable and disable
// diffren setting 
// dispatch action to setting slice  with switch button

const Setting = ()=>{
    const dispatchSetting = useDispatch()
    const setting = useSelector(state => state.settings)
   // console.log(setting)

    const changeSetting  = (settingValue)=>{
        console.log(settingValue)
        console.log('change ...')
        dispatchSetting(settingAction.setNewSetting(settingValue))
    }

    return(
        <Container style={style['setting-main']}>
            <SwitchCheckBox laelText={'Confirm before deleting'} switchId={'switch-0'} onGet={changeSetting} config={setting.confirmBefroeDeleting} />
            <SwitchCheckBox laelText={'Enable trashbin'} switchId={'switch'}  onGet={changeSetting} config={setting.enableTrashBin}/>

        </Container>
    )
   
}


export default Setting;