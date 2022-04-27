import { createContext } from "react";
import Navbar from "./component/navbar";
import ListProduct from "./component/ListProduct";
import Cart from "./component/Cart";
import Adddrugs from "./component/Adddrugs";
import { useEffect, useState } from 'react';

export default function Home() {

  const searchContext = createContext();
  const [drugs, setDrugs] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState('');
  const value = {search, setSearch}

  return (
    <searchContext.Provider value={value}>
      <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center ">
        <Navbar setDrugs={setDrugs} setCart={setCart} value={value} />
        <ListProduct search={search} />
        {drugs && <Adddrugs setDrugs={setDrugs} />}
        {cart && <Cart setCart={setCart} />}
      </div>
    </searchContext.Provider>
  )
}
