
import { configureStore} from '@reduxjs/toolkit';
import stectionName from './SLICES/stection-name';
import colorThem from './SLICES/color-them';
import todos from './SLICES/todos';


const store = configureStore({
    reducer: {
        section: stectionName,
        them :  colorThem,
        todo: todos
    }
})

export default store ;
