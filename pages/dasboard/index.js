import { createContext } from "react";
import Navbar from "./component/navbar";
import ListProduct from "./component/ListProduct";
import Cart from "./component/Cart";
import Adddrugs from "./component/Adddrugs";
import Router from "next/router";
import Logout from "./component/Logout";
import { useState } from 'react';
import DataContext from "../../utils/context/DataContext";

export default function Home() {


  const [drugs, setDrugs] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState('');
  const [logout, setLogout] = useState(false);
  const [cartData, setCartData] = useState()

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center ">
      <DataContext.Provider value={{cartData, setCartData}} >
        <Navbar 
          setDrugs={setDrugs} 
          setCart={setCart} 
          setSearch={setSearch} 
          logout={logout} 
          setLogout={setLogout} 
        />
        <ListProduct search={search} />
        {cart && <Cart setCart={setCart} />}
      </DataContext.Provider>
      {logout && <Logout />}
      {drugs && <Adddrugs setDrugs={setDrugs} />}
    </div>
  )
}
