import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';


const Users = () => {

    const [data, setData] = useState([]);

    const url = `https://jsonplaceholder.typicode.com/users`;


    const { fetchedData, isLoading, error } = useFetch(url);
    return (
        <div>
          
            {
                fetchedData?.map((user) => (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Users
