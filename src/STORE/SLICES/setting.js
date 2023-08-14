
import { createSlice } from '@reduxjs/toolkit';


const initialSetting = {
    confirmBefroeDeleting : true,
    enableTrashBin : false,
}


const setting = createSlice({
    name : 'setting',
    initialState : initialSetting,
    reducers: {
        confirmBefroeDeleting: (state,action)=>{
            state.confirmBefroeDeleting = action.payload.enable
        }
    }
})


export const settingAction = setting.actions
export default setting.reducer