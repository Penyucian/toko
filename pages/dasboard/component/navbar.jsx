import axios from "axios";
import React, {useEffect, useState} from "react";
import { useFormInput } from "../../../utils/hooks/useForm";

export default function Navbar({setDrugs,setCart, setSearch, logout, setLogout, filter, setFilter}) {

    const search = useFormInput('')

    useEffect(()=>{
        setSearch(search.value)
    })

    return(
        <div className="fixed z-30 pt-4 px-4 w-full flex justify-between">
            <div className="w-1/3 py-4 px-4">
                <span className="material-icons-round">
                    logo_dev
                </span>
            </div>
            <div className="w-1/3 flex justify-center">
                <div className="h-full rounded-full flex justify-center items-center bg-white rounded-full">
                    <input 
                        className="pl-8 pr-4 h-full w-full rounded-l-full h-full flex justify-center items-center p-4 font-medium font-bold hover:bg-gray-50" 
                        type="text" 
                        name="" 
                        id=""
                        {...search}
                    />
                    <button 
                        className="h-full flex justify-center items-center p-4 hover:bg-gray-50 material-icons-round"
                        onClick={()=>{
                            if (filter) {
                                setFilter(false)
                            } else {
                                setFilter(true)
                            }
                        }}
                    >
                        filter_list</button>
                    <button className="h-full flex justify-center items-center p-4 pr-8 rounded-r-full hover:bg-gray-50 material-icons-round">search</button>
                </div>
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
    )
}