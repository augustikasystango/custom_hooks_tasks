import React, { useState,useEffect } from 'react'
import useWindowWidth from '../hooks/useWindowWidth';

const Windowsize = () => {
  
  const [width,setWidth]=useState(null);

  const getWidth=()=>{
     setWidth( window.innerWidth);
  }

  useWindowWidth(getWidth,width)

  return (
    <div>
      <p>The current width of the window is : {width}</p>
    </div>
  )
}

export default Windowsize
