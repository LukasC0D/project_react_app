import React from 'react';
import './Home.css';



const Home = () => {
  return (
    <>
      <div className='marginTop'>
        <div style={{
          color: "yellow",
          margin: "10px"
        }}
          className="Home text-center mt-5" data-testid="Home"
        >Welcome to my <strong><i style={{
          color: "rgb(0, 208, 245)"
        }}
        >React</i></strong> app.
          <br />
          <br />
          <div className='floatName'>
            <p style={{
              color: "green",
              margin: "10px",
              fontWeight: "500",
              fontSize:"30px",
            }}
            >By Lukas.<strong style={{
              color: "rgb(0, 208, 245)"
            }}><i>K</i></strong></p>
          </div>


        </div>
      </div>

    </>

  )
}

export default Home