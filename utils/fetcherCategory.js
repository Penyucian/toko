import axios from "axios";
import useSWR from "swr";


function getAllCategory() {

    const fetcher = url => axios.get(url).then(res=>res.data);
    const {data, error} = useSWR(`/api/obat/category`, fetcher);
    
    return{
        category: data,
        isLoading:!error && !data,
        isError: error
    }
}

export default getAllCategory