import React,{useState,useEffect} from 'react'

function Product({ product, index }) {

    const [units, setUnits] = useState( 0);
  const [rate, setRate] = useState( 0);
  const [gst, setGst] = useState( 0);
  const [discount, setDiscount] = useState( 0);
  const [amount, setAmount] = useState(units * rate);

  useEffect(() => {
    let amount = units * rate;
    amount += amount * (gst / 100);
    amount -= amount * (discount / 100);
    setAmount(amount);
  
  }, [units, rate,gst,discount]);
  return (
    <tr>
    <th scope="row">{index + 1}</th>
    <td>{product.product_name}</td>
    <td>
      <input
        type="number"
        id={`units-${index}`}
        className="inputch"
        value={units}
        onChange={(e) => setUnits(parseFloat(e.target.value)||0)}
      />
    </td>
    <td>
      <input
        type="number"
        className="inputch"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value)||0)}
      />
    </td>
    <td>
      <input
        type="number"
        className="inputch"
        value={gst}
        onChange={(e) => setGst(parseFloat(e.target.value)||0)}
      />
    </td>
    <td>
      <input
        type="number"
        className="inputch"
        value={discount}
        onChange={(e) => setDiscount(parseFloat(e.target.value)||0)}
      />
    </td>
    <td>{amount}</td>
  </tr>
  )
}

export default Product
