import React from 'react';

import style from './DefaultListSection.module.css';
import Container from '../../CUSTOM-COMPONENT/Container';
import PageButton from './PAGE-BUTTON/PageButton';

//import Button from '../../CUSTOM-COMPONENT/Button';


const DefaultListSection = ()=>{
    return(
        <Container style={style['default-list-main']}>
            <PageButton toDoCounter={10} SectionName={'MY Day'} iconName={'bi-brightness-high'} iconColor={'#4E8489'}>
            
            </PageButton>
            <PageButton toDoCounter={5} SectionName={'Importent'} iconName={'bi-star'}  iconColor={'#AF486B'}>
            
            </PageButton>
            <PageButton toDoCounter={3} SectionName={'Assigned to me'} iconName={'bi-person'}  iconColor={'#658C81'}>
            
            </PageButton>
            <PageButton toDoCounter={0} SectionName={'Planned'} iconName={'bi-calendar3'}  iconColor={'#3B7C7D'}>
            
            </PageButton>
            <PageButton toDoCounter={14} SectionName={'Tasks'} iconName={'bi-house'}  iconColor={'#9493CA'}>
            
            </PageButton>
            <PageButton toDoCounter={30} SectionName={'Reminder'} iconName={'bi-alarm'}  iconColor={'#2596be'}>
                
            </PageButton>
        </Container>
    )
}

export default DefaultListSection;