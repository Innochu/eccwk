import React, {Suspense, lazy, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Home = lazy(() => import("./pages/Home")) 
const About = lazy(() => import("./pages/About")) 
const Contact = lazy(() => import("./pages/Contact")) 
const NotFound = lazy(() => import("./pages/NotFound")) 
const Details = lazy(() => import("./pages/Details")) 
const Login = lazy(() => import("./pages/Login")) 

import { Spinner } from 'reactstrap'
import Signup from './pages/Signup'
import { useSelector } from 'react-redux'



function App() {

  const login = useSelector((state) => state?.user?.login)



  

  return (
   <Suspense fallback={<div className='position-absolute top-50 start-50 translate-middle'>
   <Spinner type='grow' className='bg-primary'/>
   </div>}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={ login === true ? <Home/> : <Signup/> }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

    <Footer/>
    </BrowserRouter>
   </Suspense>
  )
}


export default App