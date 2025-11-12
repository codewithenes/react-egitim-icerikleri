import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
 users: [],
 loading : false   
}


export const getAllUsers = createAsyncThunk("users",async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  console.log(response.data)
  return response.data
})

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        // http istegi olmaz ise kullanilir
    },
    extraReducers : (builder) =>{
        //http isteklerinde kullanilir
        builder.addCase(getAllUsers.fulfilled, (state , action)=>{
            state.users = action.payload
        })
    }
})
export const { } = userSlice.actions
export default userSlice.reducer