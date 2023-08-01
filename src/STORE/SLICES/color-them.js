
import { createSlice } from '@reduxjs/toolkit';


const colorThemState = {
    mainBackground : '#11100F',
    fontColor: '#ffff',
    secondrayColor : '#1B1D1E',
}


const colorThemSlice =  createSlice({
    name: 'color-them',
    initialState : colorThemState,
    reducers : {
        changeThem : (state, action)=>{
            state.mainBackground = action.payload.mainColor
            state.fontColor = action.payload.fontColor
            state.secondrayColor = action.payload.secondrayColor
        }
    }
})

export const changeThemAction = colorThemSlice.actions
export default  colorThemSlice.reducer;