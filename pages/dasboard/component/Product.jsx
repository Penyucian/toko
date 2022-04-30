import React from "react";
import { useState, useEffect } from "react";
import { cartHooks } from "../../../utils/hooks/cartHooks";

export default function Product({item}) {

    const {id, name, batch, category, ed, stock, price} = item
    const [stocks, setStocks] = useState(stock)
    const [quantity, setQuantity] = useState(0)

    cartHooks(id, price)

    return (
        <tr className="bg-white border-b hover:bg-gray-100 text-gray-900 font-bold" key={id}>
            <th scope="row" className="px-6 py-4 flex flex-col">
                <div className="font-bold text-gray-900 whitespace-nowrap">
                    {name}
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium font-bold">
                    <p className="text-xs">{batch}</p>
                    /
                    <p className="text-xs">{ed}</p>
                </div>
            </th>
            <td className="px-6 py-4 font-medium font-bold align-middle">
                {category}
            </td>
            <td className="px-6 py-4 font-medium font-bold align-middle">
                
                <input 
                    className="w-12 h-full outline-none text-center rounded-full" 
                    type="number" 
                    name="quantity"
                    value={stocks}
                    onChange={()=>{}}
                />
            </td>
            <td className="px-6 py-4 font-medium font-bold align-middle">
                {price}
            </td>
            <td className="h-full px-6 py-4 text-right align-middle text-center ">
                <div className="h-full w-full flex justify-between items-center">
                    <button 
                        className="material-icons-round font-medium rounded-full text-blue-600 active:bg-gray-300 dark:text-blue-500"
                        onClick={()=>{
                            if (quantity >= stock) {
                                setQuantity(quantity)
                                setStocks(0)   
                            } else {
                                setQuantity(quantity+1)
                                setStocks(stocks-1)
                            }
                        }}>
                        add
                    </button>
                    <input 
                        className="w-12 h-full outline-none text-center rounded-full" 
                        type="number" 
                        name="quantity"
                        value={quantity}                    
                        onChange={()=>{}}
                        disabled
                    />
                    <button 
                        className="material-icons-round font-medium rounded-full text-orange-600 active:bg-gray-300 dark:text-blue-500"
                        onClick={()=>{
                            if (quantity > 0) {
                                setStocks(stocks+1);
                                setQuantity(quantity-1);
                            } else {
                                setStocks(stocks);
                                setQuantity(0);
                            }
                        }}>
                        remove
                    </button>
                </div>   
            </td>
        </tr>  
    )
}