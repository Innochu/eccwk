import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Home = lazy(() => import("./pages/Home")) 
const About = lazy(() => import("./pages/About")) 
const Contact = lazy(() => import("./pages/Contact")) 
const NotFound = lazy(() => import("./pages/NotFound")) 

import { Spinner } from 'reactstrap'


function App() {
  return (
   <Suspense fallback={<div className='position-absolute top-50 start-50 translate-middle'>
   <Spinner type='grow' className='bg-primary'/>
   </div>}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

    <Footer/>
    </BrowserRouter>
   </Suspense>
  )
}

export default App