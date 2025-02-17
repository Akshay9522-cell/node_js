// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice=createSlice({

//     name:"mycount",
//     initialState:{
//         count:0
//     },
//     reducers:{
//         increament:(state)=>{
//             state.count=state.count+1
//         },
//         decreament:(state)=>{
//             state.count=state.count-1
//         }
//     }
// })
// export const {increament,decreament}=counterSlice.actions;
// export default counterSlice.reducer

// colorchange

import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
      
    name:"mycolor",
    initialState:{
        bgcolor:'red'
    },
    reducers:{
        bgcolorChange:(state)=>{
            state.bgcolor="cyan"
        }
    }
})

export const {bgcolorChange}= colorSlice.actions

export default colorSlice.reducer