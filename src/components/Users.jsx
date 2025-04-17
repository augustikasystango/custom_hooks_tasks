import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';


const Users = () => {

  const [showList,setShowList]=useState(true);
  const [url ,setUrl]=useState(`https://jsonplaceholder.typicode.com/posts`)

     
console.log(showList,'--13');
  const handleList = () => {
    
    setShowList(prev => !prev);
    
    
    setUrl(prevUrl => prevUrl === 'https://jsonplaceholder.typicode.com/posts'
      ? 'https://jsonplaceholder.typicode.com/users'
      : 'https://jsonplaceholder.typicode.com/posts');
  };
   


    const { fetchedData, isLoading, error } = useFetch(url);
    return (
        <div>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{color:'red'}}>Error loading users</p>}
          <button onClick={handleList}>Toggle</button>
         
           { showList && url===`https://jsonplaceholder.typicode.com/posts` ? (
                fetchedData?.map((user) => (
                    <ul key={user.id}>
                        <li>{user.title}</li>
                     
                    </ul>
                ))
            ) :(fetchedData?.map((post) => (
               
                <ul key={post.id}>
                    <li>{post.name}</li>
                 
                </ul>
            ))) }
        </div>
    )
}

export default Users
