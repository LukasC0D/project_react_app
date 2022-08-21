
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="greeter" element={<Greeter />} />
        <Route path="incrementor" element={<Incrementor />} />
        <Route path="movies" element={<Movies />}>
          <Route path='top-10-movies' element={<Top10Movies />} />
          <Route path='worst-movies' element={<WorstMovies />} />
        </Route>
        {/* <Route path='todo-list' element={<TodoList/>}/> */}
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
        <Route path='calculator' element={
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
        } />

      </Routes>
    </BrowserRouter>



  </>
  );
}

export default App;
