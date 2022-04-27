import axios from "axios";
import React, {useEffect, useState} from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function Navbar({setDrugs,setCart, value}) {

    const [data, setData] = useState('');
    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:3000/api/obat')
                .then(res => {
                    setData(res.data.result)
                })
        }
        const dataInterval = setInterval(fetchData, 5000);
        fetchData()
        return () => clearInterval(dataInterval)
    })

    return(
        <div className="fixed z-30 pt-4 px-4 w-full flex justify-between">
            <div className="w-1/3 py-4 px-4">
                <span className="material-icons-round">
                    logo_dev
                </span>
            </div>
            <div className="w-1/3 flex justify-center">
                <div className="h-full rounded-full flex justify-center items-center">
                    <div style={{width:400, display:"flex",flexDirection:"column"}}>                    
                        <ReactSearchAutocomplete
                        items={data}            
                        onSelect={(item)=>{
                            value.setSearch(item.id)
                        }} />
                    </div>
                </div>
                <button className="h-full w-full flex justify-center items-center p-4 hover:bg-gray-100 material-icons-round">filter_list</button>
            </div>
            <div className="w-1/3 flex justify-end">
                <button className="h-full max-w-fit p-4 mr-4 rounded-full border bg-white material-icons-round hover:bg-gray-100"
                    onClick={()=>setCart(true)}>
                    shopping_cart
                </button>
                <button
                    className="h-full max-w-fit p-4 mr-4 rounded-full border bg-white material-icons-round hover:bg-gray-100"
                    onClick={()=>setDrugs(true)}>
                    inventory_2
                </button>
                <button className="h-full max-w-fit p-4 rounded-full border bg-white material-icons-round hover:bg-gray-100">
                    person
                </button>
            </div>
        </div>
    )
}