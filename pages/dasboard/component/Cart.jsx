import React from "react";
import { Datadummy } from "../../../dataDummy/index";

export default function ListProduct({setCart}) {
    return(
        <div className="fixed top-0 h-screen w-screen bg-gray-900/[.75] z-50 flex flex-col justify-center items-center">
            <button className="material-icons-round fixed right-4 top-4 p-4 bg-white rounded-full"
            onClick={()=>{setCart(false)}}>
                close
            </button>
            <h5 className="w-1/2 text-center font-bold text-xl text-white">Bayar</h5>
            <div className="relative mt-4 h-1/2 w-1/2 overflow-x-auto shadow-lg sm:rounded-lg">
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
                                harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="h-1/2">
                        {Datadummy.map((item) => {
                            return (
                                <tr className="bg-white border-b" key={item.id}>
                                    <th scope="row" className="px-6 py-4 flex flex-col">
                                        <div className="font-medium text-gray-900 whitespace-nowrap">
                                            {item.nama}
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <p className="text-xs">{item.batch}</p>
                                            /
                                            <p className="text-xs">{item.ed}</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.kategori}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.stock}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.harga}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="material-icons-round font-medium text-blue-500 dark:text-blue-500">
                                            add
                                        </button>
                                        <button className="material-icons-round font-medium text-red-500 dark:text-blue-500">
                                            remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="w-1/2 mt-4 flex justify-between material-icons-round ">
                <button className="p-4 rounded-full bg-white" type="submit">delete</button>
                <button className="p-4 rounded-full bg-blue-500 text-white" type="submit">done</button>
            </div>
        </div>
    )
}