import React, {useEffect} from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient()

function ListData({search}) {
    
   const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:3000/api/obat').then(res =>
            res.json()
        )
    )

    useEffect
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message

    const datas = data.result

    console.log(search);

    return(
        <div className="z-10 pt-24 pb-4 h-screen w-full flex justify-center">
            <div className="relative h-full w-1/2 overflow-x-auto shadow-lg sm:rounded-lg">
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
                        {datas.map((item) => {
                            return (
                                <tr className="bg-white border-b hover:bg-gray-100 text-gray-900 font-bold" key={item.id}>
                                    <th scope="row" className="px-6 py-4 flex flex-col">
                                        <div className="font-medium text-gray-900 whitespace-nowrap">
                                            {item.name}
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <p className="text-xs">{item.batch}</p>
                                            /
                                            <p className="text-xs">{item.ed}</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.stock}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="material-icons-round font-medium text-blue-600 dark:text-blue-500">
                                            add
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default function ListProduct() {
    return(
    <QueryClientProvider client={queryClient}>
        <ListData />
    </QueryClientProvider>
    )
}