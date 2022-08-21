import React, { useState } from 'react';
import './Incrementor.css';

const Incrementor = () => {
  
  

  const [counter, setCounter] = useState(0);
  
  return(
    <>
  <div className=' d-flex justify-content-center mt-5 '>
  
    <button
      onClick={() => {
      setCounter(counter +1)
      console.log(counter)
      }}
      >
        Add +1
      </button>
  
  </div>
  <div className='d-flex justify-content-center mt-3' >
      {counter}
    </div>
  </>
)};


export default Incrementor;
