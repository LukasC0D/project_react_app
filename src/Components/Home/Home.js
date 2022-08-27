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
          <p style={{
            color: "green",
            margin: "10px",
            fontWeight: "500"
          }}
          >You can Navigate through pages.</p>
          <br />
          <p style={{
            color: "red"
          }}
          >Enjoy!</p>
        </div>
      </div>

    </>

  )
}

export default Home