import React , {useState}from 'react';
import Container from '../../CUSTOM-COMPONENT/Container';
import style from './Buttons.module.css';
import Button from '../../CUSTOM-COMPONENT/Button';

const Buttons = ()=>{

  const [CurrentButtonOperation, buttonOperationUpDater] = useState('ALL')
    
  const getCurrentButtonOperation = (e)=>{
    buttonOperationUpDater(e.target.value)
  }

  //console.log(CurrentButtonOperation)

  return(
      <Container style={style['buttons-main']}>
          <Button buttonProps={style['buttons']} buttonValue={'ALL'} functionHandeler={getCurrentButtonOperation}>
            All
          </Button>
          <Button buttonProps={style['buttons']} buttonValue={'ACTIVE'} functionHandeler={getCurrentButtonOperation}>
            Active
          </Button>
          <Button buttonProps={style['buttons']} buttonValue={'COMPLETED'} functionHandeler={getCurrentButtonOperation}>
            Completed
          </Button>
          <Button buttonProps={style['cl-button']} buttonValue={'CLEAR'} functionHandeler={getCurrentButtonOperation}>
            Clear Completed
          </Button>
      </Container>
  )
}

export default Buttons;