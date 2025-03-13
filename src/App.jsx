import { NavLink, Outlet } from 'react-router-dom'
import ShopContext from './Context'
import { useState, useEffect } from 'react';


function App() {

  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemNumber, setcartItemNumber] = useState(0)

//  calculation of total number of items in the cart
  const totalCartItems = (items) => {
    let sum = 0;
    items.forEach((item) => {
      sum += item.qty;
    });
    return sum
  };
  
  useEffect(() => {
    setcartItemNumber(totalCartItems(cartItems));
  }, [cartItems]);
 
  async function getProducts() {
    const url = 'https://fakestoreapi.com/products?limit=10';
    const response = await fetch(url);
    const data = await response.json();

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
    const currentCartItem = {itemId: item.id, qty: qty, price: item.price, total: qty*item.price};
    const currentItems = [...cartItems, currentCartItem];
    setCartItems(currentItems);
   
   
  };

  
  return (
    
    <ShopContext.Provider value={{products, cartItems, handleClickAddToCart}} >
        <header>
            <h1>Online Store</h1>
            <ul className="navBar">
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/cart">
                <li className="cartNavLink">
                  <div>Cart</div>
                  <div id='cartQtyNavlink'>{cartItemNumber}</div>
                </li>
              </NavLink>
            </ul>
        </header>
        <main className='main'>
            <Outlet/>
        </main>

    </ShopContext.Provider>
     
   
   
     
  )
}

export default App
