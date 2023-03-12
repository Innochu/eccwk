import React from 'react'
import logo from "./../assets/logo.png"
import {BsFacebook, BsInstagram} from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"
import { Link } from 'react-router-dom'

import visa from "./../assets/visa.png"
import master from "./../assets/master.png"
import cash from "./../assets/cash.png"
import installment from "./../assets/easyinstallment.png"

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
                <div className="col-md-3 col-6 text-white p-4">
                <p className='text-info'>Information</p>
                    <Link className='d-block nav-link' to="/">About Us</Link>
                    <Link className='d-block nav-link' to="/">FAQ</Link>
                    <Link className='d-block nav-link' to="/">Shipping & Return</Link>
                    <Link className='d-block nav-link' to="/">Privacy Policy</Link>
                    <Link className='d-block nav-link' to="/">Terms and condition</Link>
                </div>
                <div className="col-md-3 col-6 text-white p-4">
                <p className='text-info'>Customer Care</p>
                    <Link className='d-block nav-link' to="/">About Us</Link>
                    <Link className='d-block nav-link' to="/">FAQ</Link>
                    <Link className='d-block nav-link' to="/">Shipping & Return</Link>
                    <Link className='d-block nav-link' to="/">Privacy Policy</Link>
                    <Link className='d-block nav-link' to="/">Terms and condition</Link>
                </div>
            </div>
        </div>

        <div className='d-flex justify-content-end gap-2 p-3'>
            <img src={visa} alt="" />
            <img src={master} alt="" />
            <img src={cash} alt="" />
            <img src={installment} alt="" />
        </div>

        <div className="small bg-dark text-white px-4 py-1">&copy; {new Date().getFullYear()} Winstore All Right Reserved</div>

    </div>
  )
}

export default Footer