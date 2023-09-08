
import { createSlice } from '@reduxjs/toolkit';

const sectionNameState = {
    name : 'My Day',
    sectionLogo : 'bi-brightness-high',
    iconColor : '#039EDF',
}


const sectionSlice =  createSlice({
    name: 'section-name',
    initialState : sectionNameState,
    reducers : {
        changePage(state, action){
            state.name = action.payload.SectionName
            state.sectionLogo = action.payload.iconName 
            state.iconColor = action.payload.iconColor
        }
    }
})



export const sectionAction = sectionSlice.actions
export  default sectionSlice.reducer
