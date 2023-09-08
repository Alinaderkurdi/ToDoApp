
import { createSlice } from '@reduxjs/toolkit';


const colorThemState = {
    typeOfBackground :'COLOR',
    mainBackground : '#11100F',
    fontColor: '#ffff',
    secondrayColor : '#1B1D1E',
    sideFontColor: '#FFFFFF',
}


const colorThemSlice =  createSlice({
    name: 'color-them',
    initialState : colorThemState,
    reducers : {
        changeThem(state, action){
            state.typeOfBackground = action.payload.backGroundType
            state.mainBackground = action.payload.mainColor
            state.fontColor = action.payload.fontColor
            state.secondrayColor = action.payload.secondrayColor
            state.sideFontColor = action.payload.sideFontColor
        },
        addImage(state, action){
            state.mainBackground = action.payload.backgroundUrl
            state.typeOfBackground = action.payload.backgroundType
        }

    }
})

export const changeThemAction = colorThemSlice.actions
export default  colorThemSlice.reducer;