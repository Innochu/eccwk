import React from 'react'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import axios from 'axios'
import img1 from "./../assets/promo.png"
import {GrPrevious, GrNext} from "react-icons/gr"
// import cat1 from "./../assets/electronics.png"
// import cat2 from "./../assets/fashion.png"
// import cat3 from "./../assets/appliances.png"
// import cat4 from "./../assets/baby.png"

import { BsCart} from "react-icons/bs"

import { Link } from 'react-router-dom'

import productts from '../Components/product'


import { useSelector } from 'react-redux'


function Home() {



  const datas = [
    {
      text1: "Shop Computer",
      text2: "& experience",
      text3: "You cannot inspect quality into the product; it is already there.I am not a product of my circumstances. I am a product of my decisions.",
      img: img1
    },

    {
      text1: "Easy Payment",
      text2: "with ease",
      text3: "You cannot inspect quality into the product; it is already there.I am not a product of my circumstances. I am a product of my decisions.",
      img: img1
    },

    {
      text1: "Buy And Enjoy",
      text2: "deliver to your doorstep",
      text3: "You cannot inspect quality into the product; it is already there.I am not a product of my circumstances. I am a product of my decisions.",
      img: img1
    },

  ]

  // const categories = [
  //   {
  //     img:cat1,
  //     text: "Electronics"
  //   },

  //   {
  //     img: cat2,
  //     text: "Fashion"
  //   },

  //   {
  //     img: cat3,
  //     text: "Appliances"
  //   },

  //   {
  //     img: cat4,
  //     text: "Baby"
  //   },


  // ]


  const [categories, setCategories] = useState([])
  
  useEffect(()  => {

    function getCategories(){
      axios.get("http://localhost:8000/product/getcategory")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err))
    }

    getCategories()


  }, [])

   const handleDelete = (e) =>{
    axios.delete(`http://localhost:8000/product/deleteCat/${e}`)
    .then((res) => {
      alert(res.data)
      window.location.reload()
      // this will reload your browser after deleting

    })
    .catch((err) => console.log(err))
  }
 

  return (
    <div className="home">

      <div className="banner">
        <div className='container'>
        <Slider autoplay={true} autoplaySpeed={5000} dots={true} prevArrow={<GrPrevious size={32}/>} nextArrow={<GrNext size={32}/>}>
          {datas?.map((data, i) => (
            <div key={i} className="">

              <div className="row justify-content-between">

                <div className="col-md-6 col-12">
                  <div>
                    <h2 className='text-info '>{data?.text1}</h2>
                    <h2>{data?.text2}</h2>
                    <small>{data?.text3}</small>
                  </div>


                </div>

                <div className="col-md-6 col-12">
                  <img src={data?.img} alt="" className='d-block m-auto'/>
                </div>

              </div>

            </div>
          ))}
        </Slider>
        </div>
      </div>



      <div className="categories">
        <div className="container">
          <Slider 
          slidesToShow={3}
           arrows={true} 
           prevArrow={<GrPrevious size={32}/>} 
           nextArrow={<GrNext size={32}
           
           />}>
            {categories?.map((cat, i) =>(
              <div onDoubleClick = {() => handleDelete (cat?.id)} key={i} className=" position-relative p-3 w-100">
            
              {/* <div onDoubleClick = () => handleDelete(cat?.id) /*this would delete any image no longer needed key={i} className=" position-relative p-3 w-100"> */}
                <img src={`http://localhost:8000/${cat?.image}`} alt="" className='w-100 img-thumbnail'/>

                <div className="bg-white p-2 position-absolute top-50 start-50 translate-middle w-75 shadow shadow-secondary d-flex align-item-center justify-content-around">
                  <p className='text-info fw-bold'>{cat?.title}</p>
                  <small className='fw-bold'>Shop</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="dods product p-5">
        <div className="container ">
          <Slider slidesToShow={3} >
          <div className='me-4'>
              <h4>DEALS OF THE <br /> DAY</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="btn btn-sm btn-info">View More</button>
            </div>

            {productts?.map((productt, i) =>(
              <Link to={`/details/${productt?.id}`} key={i} className=''>
                <img src={productt?.img} alt="" className='d-block m-auto' />
                 <div className='d-flex justify-content-around align-items-center '>
                 <p className=''>{productt?.price}</p>
                  <button className="btn btn-secondary">
                    <BsCart/>
                  </button>
                 </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Home