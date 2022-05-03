import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    setCart: (cart=>{})
});

export default DataContext;