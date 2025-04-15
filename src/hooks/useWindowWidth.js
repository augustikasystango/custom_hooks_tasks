import { useEffect,useState } from "react";

function useWindowWidth(getWidth,initialState){

    useEffect(()=>{
        getWidth();
        window.addEventListener('resize',getWidth);
    
        return ()=>{
          window.removeEventListener('resize',getWidth);
        }
     },[])
      
   
}

export default useWindowWidth;