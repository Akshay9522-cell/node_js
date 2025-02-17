import { configureStore } from "@reduxjs/toolkit";
import myRducer from './changecolorSlice'

const store=configureStore({

    reducer:{
        mycolor:myRducer
    }
})

export default store