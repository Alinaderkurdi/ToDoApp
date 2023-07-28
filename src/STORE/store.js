
import { configureStore} from '@reduxjs/toolkit';
import stectionName from './SLICES/stection-name';








const store = configureStore({
    reducer: {
        section: stectionName
    }
})

export default store ;
