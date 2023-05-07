import React from 'react'
import axios from "axios"
import { getUser, checkLogin } from '../Redux/Slices/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        await axios.post("http://localhost:8000/account/login/", form)
        .then(res => {
            if(res?.data?.message === "login successful"){
                
                dispatch(checkLogin())
                dispatch(getUser(res?.data?.info))
                alert("login successfully")
                
            }else{
                alert("user not found")
            }
        })
        .catch(e => console.log(e))
    }

  return (
    
    <div className="login w-75 m-auto p-5">
        <form onSubmit={(e) => handleSubmit(e) }>

            <div>
                <label className='form-label' htmlFor="">Email</label>
                <input name="email" type="email" className='form-control' />
            </div>

            <div>
                <label className='form-label' htmlFor="">Password</label>
                <input name="password" type="password" className='form-control' />
            </div>

            <button type='submit' className='mt-3 btn-primary btn btn-md w-100'>Login</button>


        </form>
    </div>
  )
}

export default Login