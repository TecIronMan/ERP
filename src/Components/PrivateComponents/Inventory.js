import React, { useState, useEffect } from "react";
import '../../CSS/Inventory.css'


function Inventory() {

  


  const [products, setProduct] = useState([]);

  const getNotes=async()=>{
    
    const response = await fetch("http://localhost:8080/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
     const json=await response.json();
    setProduct(json);
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
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Purchase Rate</th>
              <th scope="col">Barcode</th>
              <th scope="col">Sell Price</th>
              <th scope="col">MRP</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
               
                  <tr key={product.id} >
                    <th scope="row" >{product.id}</th>
                    <td>{product.product_name}</td>
                    <td>{product.units}</td>
                    <td>{product.purchase_rate}</td>
                    <td>{product.barcode}</td>
                    <td>{product.selling_rate}</td>
                    <td>{product.mrp}</td>
                  </tr>
               
              );
            })}
          </tbody>
        </table>
       
      </div>
   
      

    
    </>
  );
}

export default Inventory;
