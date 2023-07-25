import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DefaultListSection.module.css';
import Container from '../../CUSTOM-COMPONENT/Container';
import PageButton from './PAGE-BUTTON/PageButton';



const DefaultListSection = ()=>{
    return(
        <Container style={style['default-list-main']}>
           
                    <NavLink to='' className={style['link-style']}>
                      <PageButton 
                      toDoCounter={10} 
                      SectionName={'My Day'}
                      iconName={'bi-brightness-high'} 
                      iconColor={'#039EDF'}>
                      </PageButton>
                    </NavLink>
                    <NavLink to='/assigendToMe' className={style['link-style']}>
                      <PageButton toDoCounter={3} 
                      SectionName={'Assigned to me'}
                      iconName={'bi-person'}
                      iconColor={'#658C81'}>
                      </PageButton>
                    </NavLink>
                    <NavLink to='/importent' className={style['link-style']}>
                      <PageButton 
                      toDoCounter={5}
                      SectionName={'Importent'}
                      iconName={'bi-star'} 
                      iconColor={'#AF486B'}>
                      </PageButton>
                    </NavLink>
                    <NavLink to='/planned' className={style['link-style']}>
                      <PageButton 
                       toDoCounter={0}
                       SectionName={'Planned'}
                       iconName={'bi-calendar3'}
                       iconColor={'#3B7C7D'}
                       >
                      </PageButton>
                    </NavLink>
                    <NavLink to='/work' className={style['link-style']}>
                      <PageButton toDoCounter={30}
                       SectionName={'Work'}
                       iconName={'bi-briefcase'}
                       iconColor={'#2596be'}
                      >
                      </PageButton>
                    </NavLink>
                    <NavLink to='/tasks' className={style['link-style']}>
                      <PageButton 
                      toDoCounter={14}
                      SectionName={'Tasks'}
                      iconName={'bi-house'}
                      iconColor={'#9493CA'}
                      >
                      </PageButton>
                    </NavLink>
                    <NavLink to='/reminder' className={style['link-style']}>
                      <PageButton
                       toDoCounter={30}
                       SectionName={'Reminder'}
                       iconName={'bi-alarm'}
                       iconColor={'#2596be'}
                      >
                      </PageButton>
                    </NavLink>
        </Container>
    )
}

export default DefaultListSection;