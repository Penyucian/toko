import React from "react";
import { useState } from "react";
import { useFormInput } from "../../../utils/hooks/useForm";
import axios from "axios";

export default function Adddrugs({setDrugs}) {

    const name = useFormInput('');
    const batch = useFormInput('');
    const ed = useFormInput('');
    const category = useFormInput('');
    const stock = useFormInput('');
    const price = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleAddDrug() {
        setLoading(true)
        if ((name.value && category.value && stock.value && price.value) !== "") {
            axios.post("http://localhost:3000/api/obat",
                {
                    name : name.value,
                    batch : batch.value,
                    ed : ed.value,
                    category : category.value,
                    stock : stock.value,
                    price : price.value
                }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    if (response.data.data) {
                        console.log(response.data);
                    } else {
                        setLoading(false)
                        setError(response.data.message)
                    }
              })
          }
        }

    return(
        <div className="fixed top-0 h-screen w-screen bg-gray-900/[.75] z-50 flex flex-col justify-center items-center">
            <button 
                onClick={()=>setDrugs(false)}
                className="material-icons-round fixed right-4 top-4 p-4 bg-white rounded-full hover:bg-gray-200 active:bg-gray-900 active:text-white">
                    close
            </button>
            <form className="p-8 bg-white rounded-lg shadow-lg flex flex-col">
                {error && <>
                    <div className="w-full h-auto text-red-500">
                        {error}
                    </div>
                    <br />
                    </>
                }
                <label htmlFor="Nama" className="ml-2 mt-2 text-xs font-bold text-gray-500">Nama</label>
                <input 
                    type="text" 
                    name="Nama" 
                    {...name}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="Nama" 
                    required
                />
                <label htmlFor="batch" className="ml-2 mt-2 text-xs font-bold text-gray-500">Batch</label>
                <input 
                    type="text" 
                    name="batch" 
                    {...batch}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="Batch"
                />
                <label htmlFor="kategori" className="ml-2 mt-2 text-xs font-bold text-gray-500">Kategori</label>
                <input 
                    type="text" 
                    name="kategori"  
                    {...category}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="Kategori" 
                    required 
                />
                <label htmlFor="ED" className="ml-2 mt-2 text-xs font-bold text-gray-500">ED</label>
                <input 
                    type="date" 
                    name="ED"  
                    {...ed}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="10/12/2022"
                />
                <label htmlFor="Stok" className="ml-2 mt-2 text-xs font-bold text-gray-500">Stok</label>
                <input 
                    type="number" 
                    name="Stok" 
                    {...stock}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="Stok" 
                    required 
                />
                <label htmlFor="harga" className="ml-2 mt-2 text-xs font-bold text-gray-500">Harga</label>
                <input 
                    type="number" 
                    name="harga"  
                    {...price}
                    className="border border-gray-900 px-4 py-2 outline-none font-bold rounded-lg hover:bg-gray-200 focus:bg-gray-100" 
                    placeholder="Harga" 
                    required 
                />
                <button 
                    className="mt-8 p-2 border border-gray-900 rounded-lg bg-white hover:bg-gray-900 hover:text-white active:bg-white active:text-black"            
                    onClick={handleAddDrug}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}