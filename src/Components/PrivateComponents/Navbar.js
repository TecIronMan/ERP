import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor:'#3761a6'}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" to="/">Mass It Solutions</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to="/customers">Sale</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/success/purchase">Purchase</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/success/inventory">Inventory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/success/supplier">Supplier</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Transaction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Report</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Tools</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Config</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Videos</Link>
        </li>
      
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
