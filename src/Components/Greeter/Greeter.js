import React, { useState } from 'react';
import './Greeter.css';



const Button = ({thisId, text, color, handleCallback}) => (
  <button 
  id={thisId} 
  onClick={() => {handleCallback()}} 
  style= {{color:color}}
  >
  {text} 
  </button>

);

const Greeter = () => {


  const [name, setName] = useState({ value: "", wasCleared: false })
  const [showGreet, setShowGreet] = useState(false)


  return (
    <>
      <div className='flexBox'>
        <div style={{fontSize:"125%"}} 
             className='d-flex justify-content-center mt-5'>
          <input
            style={{ display: "block" ,borderRadius:"5px"  }}
            placeholder="What is your name?"
            onKeyUp={(e) => {
              setName({
                value: e.target.value,
                wasCleared: e.target.value === "" && e.key === "Backspace"
                  ? true : false
              })
            }}
            className={"me-2"}
          />
          <Button
            color={showGreet ? (name.value.length > 5 ? "red" : "green") : "blue"}
            text={showGreet ? "Hide" : "Show"}
            handleCallback={() => (name.value.length >= 0 ? setShowGreet(!showGreet) : null)}
        
          />
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <label style={{ display: "block" }}>
            <strong className='text-white' style={{
              fontSize:"25px"
            }}>{showGreet ? `Welcome  ${name.value}  !!! :) ` : ""}</strong>
          </label>
        </div>
      </div>

    </>
  )
};


export default Greeter;
