//import { defaultMethod } from 'react-router-dom/dist/dom';
import { legacy_createStore } from 'redux';


const initialState = {
    stctionName : {
        name : 'My Day',
        sectionLogo : 'bi-brightness-high',
        iconColor : '#039EDF',
    },
    colortheme: {
        mainBackground: '#11100F',
        seconderyBackground: '#252423',
        fontColor: '#ffff',
    }
}

const reduser = ( state= initialState, action)=>{

    if(action.type === 'CHANGE-PAGE'){
        return {
            ...state,
            colortheme :{
                ...state.colortheme
            },
            stctionName : {
                ...state.stctionName,
                name : action.payload.name,
                sectionLogo: action.payload.sectionLogo,
                iconColor: action.payload.iconColor
            }
        }
    }else if (action.type === 'CHANGE-THEM'){
        //return{
        //   ...state,
        //   stctionName: {
        //    ...state.stctionName
        //   },
        //   colortheme: {
        //    
        //   }
        //}
    }

    return{
        ...state 
    }
}

const store = legacy_createStore(reduser)

export default store ;
