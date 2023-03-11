import React from 'react'
import logo from "./../assets/logo.png"
import {BsFacebook, BsInstagram} from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>

        <div className="container">
            <div className="row">

                <div className="col-md-3 col-6 p-4 text-white">
                    <img src={logo} alt="logo" className='img-fluid' />
                    <p className='text-info p-2 '>Got questions? Call us 24/7!</p>
                    <p >03 111 666 144 <br /> 0317 1777015.</p>
                    <p className='text-info small'>Contact Info</p>
                    <small className=''>info@me.com</small>

                    <div className="d-flex justify-content-between py-4">
                        <BsFacebook/>
                        <AiFillTwitterCircle/>
                        <FiLinkedin/>
                        <BsInstagram/>
                    </div>
                </div>

                <div className="col-md-3 col-6 p-4 text-white">
                    <p className='text-info'>Trending</p>
                    <Link className='d-block nav-link' to="/">Installment</Link>
                    <Link className='d-block nav-link' to="/">Electronics</Link>
                    <Link className='d-block nav-link' to="/">Grocery</Link>
                    <Link className='d-block nav-link' to="/">Installment</Link>

                </div>
                <div className="col-md-3 col-6"></div>
                <div className="col-md-3 col-6"></div>
            </div>
        </div>

    </div>
  )
}

export default Footer