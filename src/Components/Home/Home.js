import React from 'react';
import './Home.css';



const Home = () => {
  return (
    <>
      <div className='marginTop'>
        <div style={{
          color: "white",
          margin: "10px"
        }}
          className="Home text-center mt-5" data-testid="Home"
        >Welcome to  <strong><i style={{
          color: "rgb(0, 208, 245)"
        }}
        >Cube</i></strong> 
          <br />
          <br />
          <div className='floatName'>
            <p style={{
              color: "white",
              margin: "10px",
              fontWeight: "500",
              fontSize:"15px",
            }}
            >Designed by Lukas.<strong style={{
              color: "rgb(0, 208, 245)"
            }}><i>K</i></strong></p>
          </div>


        </div>
      </div>

    </>

  )
}

export default Home