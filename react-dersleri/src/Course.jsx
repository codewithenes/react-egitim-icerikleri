import React from 'react'
import "./css/course.css"

function Course({course}) {
    const {id, title, description, image, price} = course
  return (
    <div className='course'>
        <img src={image} height={200} width={200}></img>
       <h4> {title} </h4>
       <h5> {description} </h5>
       <h5>Price: {price} USD </h5>

        </div>
       
  )
}

export default Course