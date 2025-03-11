import { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
     <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
     </div>
     <Outlet/>
    </>
     
  )
}

export default App
