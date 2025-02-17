import { createSlice } from "@reduxjs/toolkit";

const colorSlice= createSlice({
     name:"akki",

     initialState:{
        bgColor:"pink"
     },
     reducers:{
         bgchangeColor:(state,actions)=>{
              state.bgColor=actions.payload
         }
     }

})

export const  {bgchangeColor}=colorSlice.actions

export default colorSlice.reducer