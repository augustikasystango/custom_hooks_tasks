import { useEffect, useState ,useRef } from "react";
import axios from "axios";


function useFetch(url) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    const abortRef = useRef(null);

    const fetchData = async () => {
        setIsLoading(true);
        if (abortRef.current) {
            abortRef.current.abort();
        }

        const controller = new AbortController();
        abortRef.current = controller;
        try {

            const res = await axios.get(url, { signal: controller.signal });
            setFetchedData(res?.data);
            setIsLoading(false)
        }
        catch (error) {
            if (axios.isCancel(error)) {
                console.log(`Request cancelled : `, error.message)
            } else {
                console.log(error, `Error fetching data`);
                setError({ message: error.message || `Failed to fetch data` });
            }

        }
    }

    useEffect(() => {

        console.log(`controller mounted`)

        fetchData();
        return () => {
            console.log(`controller unmounted`)
            if(abortRef.current)
            {abortRef.current.abort();}

        }
    }, [url]);


    return { fetchedData, isLoading, error }

}

export default useFetch;