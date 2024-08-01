import React from 'react'

import {Route, Routes} from 'react-router-dom';
import Inventory from './Inventory'

import Navbar from './Navbar';
import PurchaseProduct from './PurchaseProduct';
import Supplier from './Supplier';

const ERP=()=> {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/purchase' element={<PurchaseProduct/>}/>
    <Route path='/supplier' element={<Supplier/>}/>
    </Routes>

    </>

  )
}

export default ERP;
