import { createContext } from "react";
import Navbar from "./component/navbar";
import ListProduct from "./component/ListProduct";
import Cart from "./component/Cart";
import Adddrugs from "./component/Adddrugs";
import Logout from "./component/Logout";
import { useEffect, useState } from 'react';

export default function Home() {

  const [drugs, setDrugs] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState('');
  const [logout, setLogout] = useState(false);


  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center ">
      <Navbar 
        setDrugs={setDrugs} 
        setCart={setCart} 
        setSearch={setSearch} 
        logout={logout} 
        setLogout={setLogout} 
      />
      <ListProduct search={search} />
      {logout && <Logout />}
      {drugs && <Adddrugs setDrugs={setDrugs} />}
      {cart && <Cart setCart={setCart} />}
    </div>
  )
}
