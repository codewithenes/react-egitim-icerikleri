import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import userReducer from "../redux/userSlice"

export const store = configureStore({
  reducer: {
    ui : counterReducer,
    user : userReducer
  },
})