import Home from "../pages/home";
import Cart from "../pages/cart";
import App from "../App"
import { Children } from "react";
const route = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
    
];

export default route;