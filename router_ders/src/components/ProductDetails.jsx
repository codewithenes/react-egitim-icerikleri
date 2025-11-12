import React from 'react'
import {useParams } from 'react-router-dom';
import products from "../data/productList.json"

function ProductDetails() {
    const {id} = useParams()
    const product = products.find(p => p.id ===id)
    if (!product) {
        return <div>Ürün bulunamadı.</div>;
    }
    const {name, price} = product;
  return (
    <div>
        <h2>Product Details</h2>
        <h3>Id : {id}</h3>
        <h3>Name : {name}</h3>
        <h3>Price : {price}</h3>
    </div>
    
  )
}

export default ProductDetails