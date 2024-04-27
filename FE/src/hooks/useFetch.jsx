import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
    const res = await axios.get(url);
    return res.data;
}

const useGet = (url) => {
    const { data, error, isLoading, isError, isValidating } = useSWR(url, fetcher, {
        suspense : true,
        refreshInterval : 5000,
        
    });
    return ( 
        {data, error, isLoading, isError , isValidating}
     );
}
 
export default useGet;