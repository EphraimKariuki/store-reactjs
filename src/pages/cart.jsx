import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../Context';
import CartCard from '../components/CartCard';


function Cart() {

  
  const {cartItems, products} = useContext(ShopContext); 
  const [totalPrice, setTotalPrice] = useState(0)

  const totalCost = (cartItems) => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.total;
    });

    return sum
  }

  useEffect(() => {
    setTotalPrice(totalCost(cartItems));
  },[cartItems]);
 

  
    
  return (
    <>
      <div className='cartTotals'>
        <p>Number Of Items <strong> {cartItems.length} </strong> </p>
        <p>Total Amount <strong> $ {totalPrice} </strong> </p>
        <button>Check Out</button> 
        <button>Back To shop</button>

      </div>
      <div className='container'>
        {cartItems.map((item) => {
          const product = products.find(({id}) => id == item.itemId);
          return <CartCard product={product} cartItemDatails={item}/>
        })}
      
      </div>
    </> 
  )
}

   
   

export default Cart;