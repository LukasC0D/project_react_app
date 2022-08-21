import React from 'react'

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Awesome App</Link>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
  
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
                to="/home">
                Home
              </NavLink>
  
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
                to="/greeter">
                Greeter
              </NavLink>
  
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
                to="/incrementor">
                Incrementor
              </NavLink>
  
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
                to="/movies">
                Movies
              </NavLink>
  
              <NavLink className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link" 
              } 
               to="/calculator">
                Calculator
              </NavLink>
  
              <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : "" ,
                  background:  isActive ? "rgb(133, 133, 133)" : "" 
              }
              }}
                to="/about">
                About
              </NavLink>
  
            </ul>
          </div>
        </div>
      </nav>
  
  )
}

export default Header