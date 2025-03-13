import React from 'react'

function CartCard ({cartItemDatails, product}) {
    return (
        <div className='card' key={product.id}>
            <div>
              <img  className="image" src={product.image}/>
                <h3 className='cardItem'>
                    {product.title}
                </h3>
                <p  className="cardItem">
                    {product.description}
              </p>
              <p className="cardItem">
                <strong>Price:</strong> $ {product.price}
              </p>
              
              <p><strong>Quantity :</strong> {cartItemDatails.qty}</p>
              <p><strong>Total Price :</strong> $ {cartItemDatails.total}</p>
           </div>
           <div>
                <button>Change Quantity</button>
                <button>Reomve From Cart</button>
           </div>

        </div>
    )
}

export default CartCard