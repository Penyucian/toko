import React, {useEffect, useState, useContext} from "react";
import { useFormInput } from "../../../utils/hooks/useForm";
import DataContext from "../../../utils/context/DataContext";

export default function Navbar({setDrugs,setCart, setSearch, logout, setLogout, setArrayCategory}) {

    const {cartData} = useContext(DataContext)
    const search = useFormInput('')
    const [filter, setFilter] = useState(false)

    useEffect(()=>{
        setSearch(search.value)
    })

    return(<>
        <div className="fixed z-30 pt-4 px-4 w-full flex justify-between">
            <div className="w-1/3 py-4 px-4">
                <span className="material-icons-round">
                    logo_dev
                </span>
            </div>
            <div className="w-1/3 flex justify-center">
                <form className="h-full rounded-full flex justify-center items-center bg-white rounded-full" onClick={e=>e.preventDefault()}>
                    <input 
                        className="pl-8 pr-4 h-full w-full rounded-l-full h-full flex justify-center items-center p-4 font-medium font-bold hover:bg-gray-50" 
                        type="text" 
                        name="" 
                        id=""
                        {...search}
                    />
                    <button
                        className="h-full flex justify-center items-center p-4 pr-8 rounded-r-full hover:bg-gray-50 material-icons-round"
                        onClick={(e)=>{
                            e.preventDefault()
                            setSearch(search.value)
                        }}
                        >
                            search
                    </button>
                </form>
            </div>
            <div className="w-1/3 flex justify-end">
                <button className="h-full max-w-fit p-4 mr-4 rounded-full border bg-white material-icons-round hover:bg-gray-100"
                    onClick={()=>{
                        if (cartData) {
                            setCart(true); setDrugs(false); setLogout(false)   
                        }}}>
                    shopping_cart
                </button>
                <button
                    className="h-full max-w-fit p-4 mr-4 rounded-full border bg-white material-icons-round hover:bg-gray-100"
                    onClick={()=>{setDrugs(true); setLogout(false); setCart(false)}}>
                    inventory_2
                </button>
                <button 
                    className="h-full max-w-fit p-4 rounded-full border bg-white material-icons-round hover:bg-gray-100"
                    onClick={()=>{
                        if (logout) {
                            setLogout(false)
                        } else {
                            setLogout(true)
                        }
                    }}>
                    person
                </button>
            </div>
        </div>
        {filter && <ListFilter setArrayCategory={setArrayCategory} setFilter={setFilter} />}
        </>
    )
}