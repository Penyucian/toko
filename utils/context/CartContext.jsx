import { createContext } from "react";

const cartContext = createContext({
    cart: [],
    setCart: (cart=>{})
});

export default cartContext;