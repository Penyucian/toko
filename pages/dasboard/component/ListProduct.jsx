import React,{useEffect} from "react";
import Product from "./Product";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


const queryClient = new QueryClient() 

export default function ListProduct({search, setCartData2}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Inject search={search} setCartData2={setCartData2}/>
        </QueryClientProvider>
    )
} 

function Inject({search, setCartData2}) {

    const {isLoading, error, data} = useQuery('repoData', ()=>fetch('http://localhost:3000/api/obat').then(res => res.json()))

    if (isLoading) return (
        <div className="h-screen w-screen flex justify-center items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </ div>
    )

    if (error) return <p className="h-screen w-screen flex justify-center items-center">{error}</p>

    setCartData2(data)

    const getBySearch = data.result.filter((item) =>{
        return (item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
    })

    return(
        <>
        {getBySearch.length == 0 ? 
            <div className="h-screen w-screen flex justify-center items-center">
                <h2 className="p-4 bg-white font-medium rounded-lg ">Data tidak ditemukan</h2>
            </div>
            :
            <div className="z-10 pt-24 h-screen w-full flex justify-center">
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
                            { getBySearch.map((item) => {
                                return (
                                    <Product item={item} key={item.id} />
                                )    
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    )
    
}