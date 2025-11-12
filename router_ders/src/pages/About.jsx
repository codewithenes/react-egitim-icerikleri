import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"

function About() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>About</h1>
        <div  className="secondHeader" >
      <Link  className='link' to="employee">About Employee </Link>
      <Link  className='link' to="company">About Company </Link>

      <Outlet/>
        </div>

    </div>
  )
}

export default About