import { createContext } from "react";
import Navbar from "./component/navbar";
import ListProduct from "./component/ListProduct";
import Cart from "./component/Cart";
import Adddrugs from "./component/Adddrugs";
import Logout from "./component/Logout";
import { useEffect, useState } from 'react';
import CartContext from "../../utils/context/CartContext";

export default function Home() {

  const [drugs, setDrugs] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState('');
  const [logout, setLogout] = useState(false);
  const [cartData, setCartData] = useState()
  const [cartData2, setCartData2] = useState()

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center ">
      <Navbar 
        setDrugs={setDrugs} 
        setCart={setCart} 
        setSearch={setSearch} 
        logout={logout} 
        setLogout={setLogout} 
      />

      <CartContext.Provider value={{cartData, setCartData}} >
        <ListProduct search={search} cartData2={cartData2} setCartData2={setCartData2} />
        {cart && <Cart setCart={setCart} cartData2={cartData2} />}
      </CartContext.Provider>
      {logout && <Logout />}
      {drugs && <Adddrugs setDrugs={setDrugs} />}
    </div>
  )
}
