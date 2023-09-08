import globalBoxShadow from '../APP_COMPONENT/GLOBAL-STYLE/BoxShadow.module.css'
import { useSelector } from "react-redux"

const useAddBoxShadow = ()=>{
    const colorThem = useSelector(state => state.them)
    let boxShadow = colorThem.mainBackground === '#11100F' ? globalBoxShadow[ 'wite-box-shadow'] : globalBoxShadow['black-box-shadow']
    return boxShadow 
}

export default useAddBoxShadow;