//import { defaultMethod } from 'react-router-dom/dist/dom';
import { legacy_createStore } from 'redux';


const initialState = {
    stctionName : {
        name : 'My Day',
        sectionLogo : 'bi-brightness-high',
        iconColor : '#039EDF',
    }
}

const reduser = ( state= initialState, action)=>{

    if(action.type === 'CHANGE-PAGE'){
        return {
            ...state,
            stctionName : {
                ...state.stctionName,
                name : action.payload.name,
                sectionLogo: action.payload.sectionLogo,
                iconColor: action.payload.iconColor
            }
        }
    }

    return{
        ...state 
    }
}

const store = legacy_createStore(reduser)

export default store ;
