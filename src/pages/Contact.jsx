import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkBuy, buyByNo } from '../Redux/Slices/userSlice'

function Contact() {

  const dispatch = useDispatch()

  const beer = useSelector((state) => state?.user?.beer)

  return (
    <>
    <div>{beer}</div>
    <button onClick={() => dispatch(buyByNo(10))}>update store</button>
    <button onClick={() => dispatch(checkBuy())}>update store</button>
    </>
  )
}

export default Contact