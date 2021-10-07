import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function Navbar() {
  const history = useHistory()

  const hdlLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    alert('Logout Successful')
    history.push('/login')
  }
  
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary">
      <div className="container justify-content-end">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={hdlLogout}>Logout</a>     
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
