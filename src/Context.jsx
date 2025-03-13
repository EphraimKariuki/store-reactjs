import React, { createContext } from 'react'

const ShopContext = createContext(
    {
        products: [],
        cartItems: [],
        addTocart: () => {}
    }
);

export default ShopContext;