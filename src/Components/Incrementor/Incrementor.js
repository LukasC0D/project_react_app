import React, { useState } from 'react';
import './Incrementor.css';

const Incrementor = () => {



  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className=' d-flex justify-content-center mt-5 flexbox '>
        <div >

          <button style={{
            fontSize: "30px",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "red"
          }}
            onClick={() => {
              setCounter(counter + 1)
              console.log(counter)
            }}
          >
            Add +1
          </button>

        </div>
        <div className='mt-2 ms-4'>
          <i style={{
            fontSize: "25px",
            color: "white"
          }}>{counter}</i>
        </div>
      </div>
    </>
  )
};


export default Incrementor;
