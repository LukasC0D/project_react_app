import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header =() => {

  return (
      <nav className="navbar navbar-expand-lg  newcolor">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-box  me-3 mb-1 text-danger" viewBox="0 0 16 16 " >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
          </svg>
            <i className='gothic'>The Cube</i></Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box  me-4  text-white" viewBox="0 0 16 16 " >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
          </svg>
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
                to="/">
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
                to="/item-list">
                Items-List
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