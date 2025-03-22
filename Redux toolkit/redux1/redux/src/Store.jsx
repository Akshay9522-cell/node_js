
import {configureStore} from '@reduxjs/toolkit'

import myReducer from './countSlice'

const store=configureStore({

    reducer:{
        myColor:myReducer
    }
})

export default store