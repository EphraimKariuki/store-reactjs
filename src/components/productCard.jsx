import React, { useContext } from 'react';
import { useState, useEffect} from 'react';
import ShopContext from '../Context';

// import "../index.css";


function ProductCard({product, onclickAddToCart}) {
  const [isIncart, setIsIncart] = useState(false);
  const [currentQty, setCurrerntQty] = useState(1)
  const qtyId = "qty" + product.id;

  const {cartItems} = useContext(ShopContext);
  
  const findItemIncart = (items) => {
    let cartItemsIDs = [];
    cartItems.forEach((item) => {
      cartItemsIDs.push(item.itemId)
    });

    return cartItemsIDs.includes(product.id);
  }

  useEffect(() =>{
    setIsIncart(findItemIncart(cartItems));
  },[cartItems]);
 
  


  
  return (
       <div key={product.id} className='card' >
           <div>
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
           </div>
           {isIncart ?
                  
                    (<div className='cardItem cardQtyDiv'>
                      <div>Cart Quantities : <strong>{currentQty}</strong></div>
                      <button>Remove Cart</button>
                    </div>)
                   
                  : 
                    (<div className='cardItem cardQtyDiv'>
                          <div>
                              <label>Qty: {""}</label>
                              <input 
                                  id={qtyId}
                                  type="number" 
                                  className='qtyInput'
                                  value ={currentQty}
                                  min={1}
                                  onChange={(e) => {setCurrerntQty(e.target.value)}}
                              />
                          </div>
                          <button onClick={onclickAddToCart}>
                              Add To Card
                          </button>
                              
                    </div>)
                  
                  }
           
           
           
        </div> 
     
  
  )
}

export default ProductCard;