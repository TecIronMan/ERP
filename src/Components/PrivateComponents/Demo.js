import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/demo.css'

const Demo=()=> {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };
  return (
    <>
   
      <nav className="menu" tabIndex="0">
	<div className="smartphone-menu-trigger"></div>

	<ul>
    <li tabIndex="0" className="nav-item"> <Link className="nav-link" to={"/success/inventory"}>Dashboard</Link> </li>
    <li tabIndex="1" className="icon-customers"><Link className="nav-link" to={"/success/inventory"}>Dashboard</Link> </li>
    <li tabIndex="2" className="icon-users"><Link className="nav-link" to={"/success/inventory"}>Dashboard</Link> </li>
    <li tabIndex="3" className="icon-settings"><Link className="nav-link" to={"/success/inventory"}>Dashboard</Link> </li>
    
  </ul>
</nav>


    </>
  )
}

export default Demo
