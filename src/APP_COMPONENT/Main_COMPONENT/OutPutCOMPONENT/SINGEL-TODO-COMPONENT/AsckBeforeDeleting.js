
import React from "react";
import Container from "../../../../CUSTOM-COMPONENT/Container";
import Button from "../../../../CUSTOM-COMPONENT/Button";
import style from './AsckBeforeDeleting.module.css';
//import { ToDoActions } from "../../../../STORE/SLICES/todos";
//import { useDispatch } from "react-redux";




const AsckBeforeDeleting = (props)=>{

    return(
        <Container style={style['asck-main']}
        backgroundColor={'secondrayColor'}
        >
          <p className={style['text-holder']}>
              Are you sure 
          </p>
          <Button buttonProps={style['cancel-button']} functionHandeler={props.cancelHandeler}>
              CANCEL
          </Button>
          <Button buttonProps={style['delete-button']} functionHandeler={props.deleteFuctionPointer}>
              DELETE
          </Button>
        </Container>
    )
}

export default AsckBeforeDeleting;