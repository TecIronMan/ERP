import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar=(props)=> {

 
  
  
  return (
    <div>
      <nav className="navbar navbar-expand fixed-top navbar-dark" style={{ backgroundColor:'#3761a6'}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" to="/" >Mass It Solutions</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="/customers">Customers</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
       
      </ul>
      <Link type="button" to="/login" className="btn btn-primary mx-1">Login/Sign-up</Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
