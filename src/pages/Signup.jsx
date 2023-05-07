import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkLogin, getUser } from '../Redux/Slices/userSlice'

function Signup() {
 const navigate = useNavigate()
 const dispatch = useDispatch()

const handleSubmit = (e) =>{
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const fname = data.get("fname")
    const lname = data.get("lname")
    const email = data.get("email")
    const pwd = data.get("pwd")
    const photo = data.get("photo")

    dispatch(checkLogin())
    dispatch(getUser({fname, lname, email, pwd, photo}))
    navigate("/")




}


   

  return (
    <div className='container p-5'>

  

    <form onSubmit={(e) => handleSubmit(e)}>
       <div className="row">
        <div className="col-md-6 col-12 my-2">
            <input name="first_name" type="text" className="form-control" placeholder='enter firstname'/>
        </div>

        <div className="col-md-6 col-12 my-2">
            <input name="last_name" type="text" className="form-control" placeholder='enter lastname'/>
        </div>

        <div className="col-md-6 col-12 my-2">
            <input name="email" type="email" className="form-control" placeholder='enter email'/>
        </div>

        <div className="col-md-6 col-12 my-2">
            <input name="password" type="password" className="form-control" placeholder='enter password'/>
        </div>

        <div className="col-md-6 col-12 my-2">
            <input name="photo" type="file" className="form-control"/>
        </div>

        <div className="col-md-6 col-12 my-2">
          <button type='submit' className="btn btn-md btn-primary">Signup</button>
        </div>
       </div>
    </form>
  </div>
  )
}


export default Signup