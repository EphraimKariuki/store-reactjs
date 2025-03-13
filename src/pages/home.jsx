import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import "../index.css";
import ProductCard from '../components/productCard';
import ShopContext from '../Context';

function Home() {
  
  const {products, cartItems, handleClickAddToCart} = useContext(ShopContext);
  if (!products) return <h1>Loading...</h1>

  return (
    <div className='container'>
      {products.map((product) => 
       <ProductCard product={product} onclickAddToCart={() => {handleClickAddToCart(product)}} />
      )} 
    </div>
  )
}

export default Home;