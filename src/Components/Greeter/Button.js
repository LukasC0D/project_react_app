import React from 'react';
import "./Greeter/Button.css";


const Button = ({thisId, text, color, handleCallback}) => (
  <button 
  id={thisId} 
  onClick={() => {handleCallback()}} 
  style= {{color:color}}
  >
  {text} 
  </button>

);

Button.propTypes = {
  thisId: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	handleCallback: PropTypes.func.isRequired,

};



export default Button;
