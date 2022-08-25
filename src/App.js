
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Greeter from './Components/Greeter/Greeter';
import Incrementor from './Components/Incrementor/Incrementor';
import About from './Components/About/About';
import ItemList from './Components/ItemList/ItemList';
import Image from './Components/Images/error.jpg'



const pStyle = {
  textAlign: " center",
  color: "white",
  fontWeight: "900",
  fontSize: "20px",
  background: "black",
  marginBottom: "0px",
}

const App =() => {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="greeter" element={<Greeter />} />
        <Route path="incrementor" element={<Incrementor />} />
        <Route path='item-list' element={<ItemList/>}/>
        <Route path="about" element={<About />} />
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <div className='d-flex justify-content-center'>
                <div>
                  <p style={pStyle} >There's nothing here!</p>
                  <img  src={Image} alt={'logo'}></img>
                </div>
              </div>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>



  </>
  );
}

export default App;
