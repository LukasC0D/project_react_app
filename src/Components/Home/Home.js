import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
    <div style={{color:"yellow" , margin:"10px"}} className="Home text-center mt-5" data-testid="Home">
      Welcome to my app. This is very base and simple <i style={{color:"blue"}}>React</i>  webpage.
    <br/>
    <br/>
    <p style={{color:"green",margin:"10px"}}> Please try to navigate through pages.</p>
    <br/>
    <p style={{color:"red"}}>Enjoy!!!</p>
  </div>
 
  </>

  )
}

export default Home