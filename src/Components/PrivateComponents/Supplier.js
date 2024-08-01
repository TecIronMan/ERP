import React, { useState, useEffect } from "react";
import '../../CSS/Inventory.css'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function Supplier() {

    const [supplier, setSupplier] = useState([]);
    let i=0;

    const getNotes=async()=>{
      
      const response = await fetch("http://localhost:8080/supplier", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
       const json=await response.json();
      setSupplier(json);
      // if (json.success) {
      //   // Save the auth token and redirect
      //   localStorage.setItem("token", json.authtoken);
      //   history.push("/");
      // } else {
      //   alert("Invalid credentials");
      // }
    }
  
    useEffect(() => {
      getNotes()
      // eslint-disable-next-line
  }, [])

  

  return (
    <>

{/* <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar> */}
    <div
    className="container"
    style={{
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      width: "100%",
      textAlign: "center",
    }}
  >
    <table className="table table-striped">
      <thead className="head">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Supplier Name</th>
          <th scope="col">Company Name</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
          <th scope="col">GST Number</th>
          <th scope="col">Address</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {supplier.map((supplier) => {
          return (
           
              <tr key={supplier.id} >
                <th scope="row" >{++i}</th>
                <td>{supplier.supplier_first_name +' '+ supplier.supplier_last_name }</td>
                <td>{supplier.company_name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.gst_no}</td>
                <td>{supplier.address}</td>
                <td>{}</td>
              </tr>
           
          );
        })}
      </tbody>
    </table>
   
  </div>
  </>
  )
}

export default Supplier
