import React from 'react'
import { useState, useEffect } from 'react';
import "../index.css";
import ProductCard from '../components/productCard';

function Home() {
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);

  async function getProducts() {
    const url = 'https://fakestoreapi.com/products?limit=10';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    setProducts(data)

  
  }

  useEffect(
    () => {
      getProducts();  
    },[]
  );

  function handleClickAddToCart (item) {
    const qtyId = "qty" + item.id;
    const qty = parseInt(document.querySelector(`#${qtyId}`).value);
    const currentItems = [...cartItems, {itemId: item.id, qty}];
    setCartItems(currentItems);
    console.log(cartItems);
    console.log(qty);
  };
  if (!products) return <h1>Loading...</h1>

  return (
    <div className='container'>
      {products.map((product) => 
       <ProductCard product={product} onclickAddToCart={() => {handleClickAddToCart(product)}}/>
      )} 
    </div>
  )
}

export default Home;