
import React from 'react';

import style from './SearchBox.module.css';
import  InputFild from '../../CUSTOM-COMPONENT/InputFild'; 

const SearchBox = ()=>{
    const getFromSerach = ()=>{
      console.log('Search ...')  
    }
    
    return(
        <InputFild 
           inputContainerStyle={style['sharch-box-container']}
           placeholderText={'Search....'}
           inputFildStyle={style['search-box-inputfild-style']}
           inputButtonStyle={style['search-button']}
           buttonIcone={<i className="bi bi-search"></i>}
           functionHandeler={getFromSerach}>
        </InputFild>
        
    )
}


export default SearchBox;