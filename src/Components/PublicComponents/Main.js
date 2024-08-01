import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import LoginSignup from './LoginSignup'
import {Route, Routes} from 'react-router-dom';

function Main() {
  return (
    <>
       <Navbar/>
       <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    
   
    </Routes>
    </>
  )
}
  
export default Main
