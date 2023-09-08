
import { createSlice } from '@reduxjs/toolkit';


const initialSetting = {
    confirmBefroeDeleting : {
        settingId : 'confirmBefroeDeleting',
        isEnable: true,
    },
    enableTrashBin : {
        settingId : 'enableTrashBin',
        isEnable : false
    }
}


const setting = createSlice({
    name : 'setting',
    initialState : initialSetting,
    reducers: {
       setNewSetting(state, action){
        const  settingKey =  action.payload.settingName
        const  settingNameValue =   action.payload.settingNewState
        state[settingKey] = settingNameValue
       }
    }
})


export const settingAction = setting.actions
export default setting.reducer