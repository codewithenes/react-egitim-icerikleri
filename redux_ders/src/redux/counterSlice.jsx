import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initalState = {
  nightMode : false,
};

export const uiSlice = createSlice({
  name : "ui",
  initialState :  initalState,
  reducers: {
    disableNightMode : (state) =>{
      state.nightMode = false
    },
     enableNightMode : (state) =>{
      state.nightMode = true
    },
  }
});

export const {disableNightMode , enableNightMode } = uiSlice.actions;
export default uiSlice.reducer;