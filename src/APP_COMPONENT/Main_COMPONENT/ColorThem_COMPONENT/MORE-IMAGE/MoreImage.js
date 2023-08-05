
import React from 'react';

import Container from '../../../../CUSTOM-COMPONENT/Container';
import Button from '../../../../CUSTOM-COMPONENT/Button';
import style from './MoreImage.module.css';


const MoreImage = ()=>{
    const getImage = (e)=>{
      console.log(e.target.value)
    }

    return(
        <Container 
        style={style['more-image-section']}
        animation={{opasity: 1, y: -5}}
        initial={{opasity: 0 ,y: -10}}
        durationValue={0.2} >
            <Button 
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-mohan-reddy-4388593.jpg'}>

            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-johannes-plenio-1133506.jpg'}>

            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-andy-vu-3244513.jpg'}>
               
            </Button>
            <Button 
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-aleksandar-pasaric-1619569.jpg'}>

            </Button>
            <Button 
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-adrien-olichon-2387793.jpg'}>
                
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-walid-ahmad-909656.jpg'}>
                
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-walid-ahmad-1509582.jpg'}>
                
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
                
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
                
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getImage}
            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
    
            </Button>

        </Container>
    )
}

export default MoreImage;