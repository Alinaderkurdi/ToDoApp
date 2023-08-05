
import React, { useState } from 'react';
import Button from '../../../CUSTOM-COMPONENT/Button';
import Container from '../../../CUSTOM-COMPONENT/Container';
import style from './ImageButtonSection.module.css';
import MoreImage from './MORE-IMAGE/MoreImage';
import { useDispatch } from 'react-redux';
import { changeThemAction } from '../../../STORE/SLICES/color-them';

//<div className={style['input-holder']}>
//<label for='input-file' className={style['lable-style']}>
 //  <i className="bi bi-image" style={{fontSize: '2rem'}}></i>
 //  <input  
 //   type='file'
 //   id='input-file'
  //  className={style['input-fild']}
 //   accept="image/png, image/jpg, image/gif, image/jpeg"
 //   onChange={getImage}
// />
//</label>
//</div>

//<Button
//buttonProps={style['image-button']}
//functionHandeler={getSelectedImage}
//buttonValue={'img-beakground/pexels-pixabay-237321.jpg'}>
//
//</Button>



//           <Button 
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-mohan-reddy-4388593.jpg'}>
//
//            </Button>
//            <Button
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-johannes-plenio-1133506.jpg'}>
//
//            </Button>
//            <Button
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-andy-vu-3244513.jpg'}>
//               
//            </Button>
//            <Button 
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-aleksandar-pasaric-1619569.jpg'}>
//
//            </Button>
//            <Button 
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-adrien-olichon-2387793.jpg'}>
//                
//            </Button>
//            <Button
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-walid-ahmad-909656.jpg'}>
//                
//            </Button>
//            <Button
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-walid-ahmad-1509582.jpg'}>
//                
//            </Button>
//            <Button
//            buttonProps={style['image-button']}
//            functionHandeler={getSelectedImage}
//            buttonValue={'img-beakground/pexels-pixabay-206359.jpg'}>
//                
//            </Button>


//solve the problem of get user image
const ImageButtonSection = ()=>{
    const [showMoreImage, setShowMoreImage] = useState(false)
    const dispatch = useDispatch()

    const getSelectedImage = (e)=>{
        console.log(e.target.value)
        dispatch(changeThemAction.addImage({
            backgroundUrl : e.target.value,
            backgroundType : 'IMAGE',
        }))
    }

    const togelshowMoreImage = ()=>{
        setShowMoreImage( prev => !prev)
    }
    console.log(showMoreImage)

    return(
        <Container style={style['image-button-section']}>
            <Button 
            buttonProps={style['image-button']}
            functionHandeler={getSelectedImage}
            buttonValue={'img-beakground/pexels-zukiman-mohamad-398467.jpg'}>

            </Button>
            <Button 
            buttonProps={style['image-button']}
            functionHandeler={getSelectedImage}
            buttonValue={'img-beakground/pexels-shahid-tanweer-1365109.jpg'}>

            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getSelectedImage}
            buttonValue={'img-beakground/pexels-sameera-madusanka-1666529.jpg'}>

            </Button>
            <Button
            buttonProps={style['image-button']}
            functionHandeler={getSelectedImage}
            buttonValue={'img-beakground/pexels-pixabay-459038.jpg'}>

            </Button>
            <Button 
            buttonProps={style['show-more-image']}
            functionHandeler={togelshowMoreImage}>
              {showMoreImage ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
            </Button>
            {showMoreImage ?  <MoreImage /> : null}
        </Container>
    )
}


export default ImageButtonSection;