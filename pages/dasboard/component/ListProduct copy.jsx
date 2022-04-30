import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import {getAllObat, getBySearch} from "../../../utils/fetcherObat";

export default function ListProduct({search, arrayCategory}) {
    
    const {obat, isLoading, isError} = getAllObat(search, arrayCategory);
    if (isLoading) return (
        <div className="h-screen w-screen flex justify-center items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </ div>
    )

    if (isError) return <p className="h-screen w-screen flex justify-center items-center">{isError}</p>

    return(
        <div className="z-10 pt-24 pb-4 h-screen w-full flex justify-center">
            <div className="relative max-h-max w-full bg- overflow-x-auto shadow-lg sm:rounded-lg">
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
                                <span className="sr-only">Kuantitas</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="h-1/2">
                        {obat.result.map((item) => {
                            return (
                                <Product item={item} key={item.id} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}