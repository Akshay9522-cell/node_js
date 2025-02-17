// import React from "react";

// import { configureStore } from '@reduxjs/toolkit'
// import myReducer from './counterSlice'

// const store = configureStore({
//   reducer: {
//     mycount:myReducer
//   },
// })


// export default store

// color change

import { configureStore } from "@reduxjs/toolkit";
import myAns from './counterSlice'

const store=configureStore({
     reducer:{
        myColor:myAns
     }
})

export default store