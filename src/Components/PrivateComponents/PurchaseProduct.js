import React, { useState, useEffect, useRef } from "react";
import "../../CSS/PurchaseProduct.css";
import Quagga from "quagga";
import Product from "./Product";
import SearchableDropdown from "./SearchableDropdown";

function PurchaseProduct() {
  const [bill, setBill] = useState({
    purchaseType: "",
    supplier: "",
    mobile: "",
    address: "",
    gstType: "",
    gstNumber: "",
    invoiceNo: "",
    invoiceDate: "",
    deliveryCharge: "",
    packingCharge: "",
    transport: "",
    gstAmount: "",
    discount: "",
    grossAmount: "",
  });
  const videoRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [amt, setAmt] = useState([]);

  const handleamt=(val)=>{
    setAmt([...amt,val])
  }

  //fetch product details
  const fetchProduct = async (barcode) => {
    const response = await fetch(
      `http://localhost:8080/getData?barcode=${barcode}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setProducts([...products, json]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProductList = products.map((product, index) => ({
      ...product,
      units: parseInt(document.querySelector(`#units-${index}`).value),
      // purchase_rate: document.querySelector(`#rate-${index}`).value,
      // gst: document.querySelector(`#gst-${index}`).value,
      // discount: document.querySelector(`#discount-${index}`).value,
    }));

    fetch("http://localhost:8080/updateList", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProductList),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        alert("There was a problem with the form submission.");
        console.error("There was an error!", error);
      });
  };

  //scan barcode
  const scanBarcode = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",

          target: document.querySelector("#yourElement"), // Selector for your video element
        },
        decoder: {
          readers: ["ean_reader"], // Specify which types of barcodes to detect (e.g., 'ean_reader', 'code_128_reader')
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(async (data) => {
      const detectedCode = data.codeResult.code;

      fetchProduct(detectedCode);

      Quagga.stop();
      cleanup();
    });

    return () => {
      Quagga.stop();
    };
  };

  const cleanup = () => {
    Quagga.stop();
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  };

  useEffect(() => {
    // Fetch suppliers
    fetch("http://localhost:8080/supplier", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setSuppliers(data))
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  const handleBill = (val) => {
    setBill({
      ...bill,
      mobile: val.contact,
      address: val.address,
      gstNumber: val.gst_no,
    });
  };
  return (
    <>
      <div className="contact-form">
        <div className="row ">
          <div className="col-lg-6 ">
            <div className="form-group">
              <select
                className="form-select"
                name="purchaseType"
                value={bill.purchaseType}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
           
              >
                <option value="">Purchase Type</option>
                <option value="1">Credit Purchase</option>
                <option value="2">Cash Purchase</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <SearchableDropdown
              suppliers={suppliers}
              setSUpDetails={handleBill}
             
            />
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="number"
                name="mobile"
                id="mobile"
                style={{ color: "black" }}
                value={bill.mobile}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="address"
                id="address"
                style={{ color: "black" }}
                value={bill.address}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <select
                className="form-select"
                value={bill.gstType}
                name="gstType"
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
               
              >
                <option value="">GST Type</option>
                <option value="1">C-GST</option>
                <option value="2">S-GST</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="gstNumber"
                id="gstnumber"
                style={{ color: "black" }}
                value={bill.gstNumber}
                onChange={(e) =>
                  setBill({
                    ...bill,
                    [e.target.name]: e.target.value.toUpperCase(),
                  })
                }
                className="form-control"
                placeholder="GST Number"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="invoiceNo"
                id="invoiceno"
                style={{ color: "black" }}
                value={bill.invoiceNo}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Invoice Number"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="date"
                name="invoiceDate"
                id="invoicedate"
                style={{ color: "black" }}
                value={bill.invoiceDate}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Invoice Date"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="deliveryCharge"
                id="deliverycharge"
                style={{ color: "black" }}
                value={bill.deliveryCharge}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Delivery Charge"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="packingCharge"
                id="packingcharge"
                style={{ color: "black" }}
                value={bill.packingCharge}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Packing Charge"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="transport"
                id="transport"
                style={{ color: "black" }}
                value={bill.transport}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Transport"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="gstAmount"
                id="gstamount"
                style={{ color: "black" }}
                value={bill.gstAmount}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="GST Amount"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="discount"
                id="discount"
                style={{ color: "black" }}
                value={bill.discount}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Discount"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                name="grossAmount"
                id="grossamount"
                style={{ color: "black" }}
                value={bill.grossAmount}
                onChange={(e) =>
                  setBill({ ...bill, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Gross Amount"
              />
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="form-group">
              <input
                type="text"
                name="barcode"
                id="barcode"
                onClick={scanBarcode}
                readOnly
                className="form-control"
                style={{ color: "black" }}
                placeholder="Scan Barcode"
              />
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div
            className="col-lg-12"
            style={{ overflowX: "auto", maxHeight: "500px" }}
          >
            <div className="form-group">
              <table className="fixed tab" id="productTable">
                <thead className="prhead">
                  <tr>
                    <th scope="col">Sr No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Purchase Rate</th>
                    <th scope="col">GST</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <Product key={index} product={product} index={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn "
                style={{ borderRadius: "22px"}}
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="yourElement"
        style={{ width: "10px", height: "0%", display: "none" }}
      >
        <video ref={videoRef} />
      </div>
    </>
  );
}

export default PurchaseProduct;
