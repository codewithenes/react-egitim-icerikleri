import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Product({product}) { 
    const {id, name, price} = product;

    const navigate = useNavigate()
  return (
    <div>
        <div style={{marginBottom: "40px", backgroundColor: "lightblue"}}>Product Details
        <h3>Name : {name}</h3>
        <h3>Price : {price}</h3>
        <button onClick={()=> navigate("/product-details/" + id)}>Details</button>
        </div>
    </div>
    
  )
}

export default Product