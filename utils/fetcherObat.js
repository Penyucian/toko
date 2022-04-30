import axios from "axios";
import useSWR from "swr";


function getAllObat(search) {


    // if (search != '') {

        // const fetcher = (url, pass) => axios.get(url, pass, {headers: {"Content-Type": "application/json"}}).then(res=>res.data);        
        // const {data, error} = useSWR(`/api/obat/name`, {"name":search}, fetcher)

        // return{
        //     obat: data,
        //     isLoading:!error && !data,
        //     isError: error
        // }

    // } else {
        
        const fetcher = url => axios.get(url).then(res=>res.data);
        const {data, error} = useSWR(`/api/obat`, fetcher);
        
        return{
            obat: data,
            isLoading:!error && !data,
            isError: error
        }
    // }
}

export default getAllObat