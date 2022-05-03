import React, {useContext, useState} from "react";
import axios from "axios";
import DataContext from "../../../utils/context/DataContext";

export default function Cart({setCart}) {

    const {cartData, setCartData} = useContext(DataContext)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    let result2 = cartData

    const total = result2.map(item => item.total).reduce((prev, next) => prev + next);

    function sendData() {
        setIsLoading(true)
        axios.post("http://localhost:3000/api/transaksi",
            {
                json : result2,
                total : total
            }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            result2.map(item =>{
                axios.put("http://localhost:3000/api/transaksi",
                {
                    id : item.id,
                    stock : item.stockCurr
                }, {
                headers: {
                    "Content-Type": "application/json"
                }
                })
            })
        })
        .then(()=>{setIsLoading(false);  window.location.reload(true)})
        .catch(err=>setError(err))
    }

    return(<>
        {isLoading ? 
            <div className="text-white p-1 bg-blue-700 rounded-lg">Loading...</div> 

            :
        
            <div className="fixed top-0 h-screen w-screen bg-gray-900/[.75] z-50 flex flex-col justify-center items-center">
            <button className="material-icons-round fixed right-4 top-4 p-4 bg-white rounded-full"
            onClick={()=>{setCart(false)}}>
                close
            </button>
            <h5 className="w-1/2 text-center font-bold text-xl text-white">Bayar</h5>
            <div className="relative bg-white mt-4 h-1/2 w-1/2 overflow-x-auto shadow-lg sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-50  sticky top-0">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama obat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jenis
                            </th>
                            <th scope="col" className="px-6 py-3">
                                stok
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kuantitas
                            </th>
                            <th scope="col" className="px-6 py-3 bg-blue-100">
                                jumlah
                            </th>
                        </tr>
                    </thead>
                    <tbody className="h-1/2">
                        {result2.map((item) => {
                            return (
                                <tr className="bg-white border-b font-medium" key={item.id}>
                                    <th scope="row" className="px-6 py-4 flex flex-col">
                                        <div className="font-medium text-gray-900 whitespace-nowrap">
                                            {item.name}
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <p className="text-xs">{item.batch}</p>
                                            /
                                            <p className="text-xs">{item.ed}</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        {item.quantityCurr}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4 bg-blue-50  text-gray-900">
                                        Rp. {item.price * item.quantityCurr}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot className="bottom-0">
                        <tr className="bg-white border-b font-medium">
                            <td colSpan={4}>
                                <p className="text-right pr-4 text-gray-900">total</p>
                            </td>
                            <td className="px-6 py-4 bg-blue-50  text-gray-900">
                                Rp. {total}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="w-1/2 mt-4 flex justify-end material-icons-round ">
                <button className="p-4 rounded-full bg-blue-500 text-white" type="submit" onClick={()=>{sendData(); setCart(false);}}>done</button>
            </div>
        </div>

        }
    </>
    )
}