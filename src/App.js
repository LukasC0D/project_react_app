
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Greeter from './Components/Greeter/Greeter';
import Incrementor from './Components/Incrementor/Incrementor';
import About from './Components/About/About';
import ItemList from './Components/ItemList/ItemList';




const imgStyle = {
  height: "500px ",
  weight: " 200px",
}
const pStyle = {
  textAlign: " center",
  color: "rgb(255, 251, 0)",
  fontWeight: "900",
  fontSize: "20px",
  background: "black",
  marginBottom: "0px",
}

function App() {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="home" element={<Home />} />
        
        <Route path="greeter" element={<Greeter />} />
        <Route path="incrementor" element={<Incrementor />} />
        {/* <Route path="movies" element={<Movies />}>
          <Route path='top-10-movies' element={<Top10Movies />} />
          <Route path='worst-movies' element={<WorstMovies />} />
        </Route> */}
        <Route path='item-list' element={<ItemList/>}/>
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <div className='d-flex justify-content-center'>
                <div>
                  <p style={pStyle} >There's nothing here!</p>
                  <img style={imgStyle} src={Image} alt={'logo'}></img>
                </div>
              </div>
            </main>
          }
        />
        {/* <Route path='calculator' element={
          <Wrapper>
            <Screen value={calc.num ? calc.num : calc.res} />
            <ButtonBox>
              {
                btnValues.flat().map((btn, i) => {
                  return (
                    <Cbutton
                      key={i}
                      className={btn === "=" ? "equals" : ""}
                      value={btn}
                      onClick={
                        btn === "C"
                          ? resetClickHandler
                          : btn === "+-"
                          ? invertClickHandler
                          : btn === "%"
                          ? percentClickHandler
                          : btn === "="
                          ? equalsClickHandler
                          : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                          ? signClickHandler
                          : btn === "."
                          ? commaClickHandler
                          : numClickHandler
                      }
                    />
                  );
                })
              }

            </ButtonBox>
          </Wrapper>
        } /> */}
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>



  </>
  );
}

export default App;
