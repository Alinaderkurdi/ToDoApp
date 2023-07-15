import React from 'react';
import Container from '../../../CUSTOM-COMPONENT/Container';
import classes from './ImageBackground.module.css';
import Button from '../../../CUSTOM-COMPONENT/Button';


const ImageBackground = ()=>{


    return(
      <Container style={classes['images-background-section']}>
        <Button buttonProps={classes['button-image']}>
         
        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
        <Button buttonProps={classes['button-image']}>

        </Button>
      </Container>  
    )
    

}

export default ImageBackground;