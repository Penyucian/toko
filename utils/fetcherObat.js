import axios from "axios";
import useSWR from "swr";

function getBySearch(search) {
    if (search) {
        const fetcher = (url, token) => fetch(url,token).then(r => r.json())
        const {data, error} = useSWR(`/api/obat/name`,{method:'POST', headers:{'Content-Type': 'application/json'}, body:{name:search}}, fetcher);
        
        console.log(data);

        return{
            obat: data,
            isLoading:!error && !data,
            isError: error
        } 
    }
}

function getAllObat() {

    const fetcher = url => axios.get(url).then(res=>res.data);
    const {data, error} = useSWR(`/api/obat`, fetcher);
    
    return{
        obat: data,
        isLoading:!error && !data,
        isError: error
    }  
}

export {getAllObat, getBySearch}