import { useState } from 'react'
import './App.css'
import {useSelector, useDispatch } from "react-redux";
import { enableNightMode ,disableNightMode } from './redux/counterSlice';
import UserList from './userList';

function App() {
  const isNightModeEnabled = useSelector ((state) => state.ui.nightMode);

  const dispatch = useDispatch();
  return (
    <>
  
    <h1>Night Mode: {isNightModeEnabled ?  "On" : "Off"}</h1>
      <button onClick={()=> {dispatch(enableNightMode())}}>Night Mode : On</button>
      <button onClick={()=> {dispatch(disableNightMode())}}>Night Mode : Off</button>
      <div>Night Mode: {isNightModeEnabled ? "On" : "Off"}</div>
      {isNightModeEnabled && <div>Night Mode : On Component</div> }
      {!isNightModeEnabled && <div>Night Mode : Off Component</div> }
      <div className={`wrapper ${isNightModeEnabled ?
        "night-mode" : "day-mode"}`}>This is a Text!</div>
          <br />
          <hr />
         <div>
    <UserList/>
       
      </div>
  
    </>
   
  )  

   

  }


export default App;