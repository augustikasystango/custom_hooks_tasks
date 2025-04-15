import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    const fetchData = async () => {
        setIsLoading(true);
       
        try {
            const res = await axios.get(url);
            setFetchedData(res?.data);
        }
        catch (error) {
            console.log(error, `Error fetching data`);
            setError({ message: error.message || `Failed to fetch data` });
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return { fetchedData, isLoading, error }

}

export default useFetch;