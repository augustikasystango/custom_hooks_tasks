import axios from 'axios';

const api_url = `https://67eb8191aa794fb3222a78fb.mockapi.io/users/users`;

const getTodos =async()=>{
    try{
      const res = await axios.get(api_url);
      console.log(res?.data ,`---data in get`)
      return res?.data;
    }
    catch(error)
    {
        console.log(error,`----error in get`)
    }
}

const addTodos= async(todos)=>{
    try{
        const res =await axios.post(`https://67eb8191aa794fb3222a78fb.mockapi.io/users/users`,
           todos
        )
        return res?.data;
    }catch(error){
        console.log(`Error adding users `,error)
    }
}

const deleteTodos = async(id)=>{
    try{
        const res = await axios.delete(`https://67eb8191aa794fb3222a78fb.mockapi.io/users/users/${id}`);
        return res?.data;

    }catch(error)
    {
        console.log(`Error in delete`,error);
    }
}

const updateTodos = async(id,todos)=>{
    try{
       const res = await axios.put(`https://67eb8191aa794fb3222a78fb.mockapi.io/users/users/${id}`,todos);
       return res?.data;

    }catch(error){
      console.log(`Error in updating `,error);
    }
}

export {getTodos ,updateTodos , deleteTodos , addTodos}