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
      <div className='d-flex justify-content-center mt-5 danger'>
        <input
          style={{ display: "block" }}
          placeholder="What is your name?"
          onKeyUp={(e) => {
            setName({
              value: e.target.value,
              wasCleared: e.target.value === "" && e.key === "Backspace"
                ? true : false
            })
          }}
          className={"inputBox"}
        />
   
        <Button
          color={showGreet ? (name.value.length > 5 ? "red" : "green") : "blue"}
          text={showGreet ? "Hide" : "Show"}
          handleCallback={() => (name.value.length >= 0 ? setShowGreet(!showGreet) : null)}
        />

      </div>
      <div className='d-flex justify-content-center mt-3'>
        <label style={{ display: "block" }}>
          <strong style={{
            fontSize:"25px"
          }}>{showGreet ? `Welcome  ${name.value}  !!! :) ` : ""}</strong>
        </label>
      </div>


    </>
  )
};


export default Greeter;
