import React from 'react';
import { useState } from 'react';

// import "../index.css";

function ProductCard({product, onclickAddToCart}) {
  const qtyId = "qty" + product.id;
  
  return (
       <div key={product.id} className='card' >
            <img  className="image" src={product.image}/>
            <h3 className='cardItem'>
                {product.title}
            </h3>
           <p className="cardItem">
             <strong>Price:</strong> $ {product.price}
           </p>
           <p  className="cardItem">
                {product.description}
           </p>
           <div className='cardItem cardQtyDiv'>
                <div>
                    <label>Qty: {""}</label>
                    <input 
                        id={qtyId}
                        type="number" 
                        className='qtyInput'
                        min={1}
                    />
                </div>
                <button onClick={onclickAddToCart}>
                    Add To Card
                </button>
                    
           </div>
           
        </div> 
     
  
  )
}

export default ProductCard;