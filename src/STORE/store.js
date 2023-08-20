
import { configureStore} from '@reduxjs/toolkit';
import stectionName from './SLICES/stection-name';
import colorThem from './SLICES/color-them';
import todos from './SLICES/todos';
import setting from './SLICES/setting';


const store = configureStore({
    reducer: {
        section: stectionName,
        them :  colorThem,
        todo: todos,
        settings: setting
    }
})

export default store ;
