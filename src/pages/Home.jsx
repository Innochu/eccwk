import React from 'react'
import Slider from 'react-slick'
import img1 from "./../assets/promo.png"
import {GrPrevious, GrNext} from "react-icons/gr"
import cat1 from "./../assets/electronics.png"
import cat2 from "./../assets/fashion.png"
import cat3 from "./../assets/appliances.png"
import cat4 from "./../assets/baby.png"

import { BsCart} from "react-icons/bs"

import { Link } from 'react-router-dom'

import products from '../Components/product'


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

  const categories = [
    {
      img:cat1,
      text: "Electronics"
    },

    {
      img: cat2,
      text: "Fashion"
    },

    {
      img: cat3,
      text: "Appliances"
    },

    {
      img: cat4,
      text: "Baby"
    },


  ]
  
 

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
              <div key={i} className=" position-relative p-3 w-100">
                <img src={cat?.img} alt="" className='w-100 img-thumbnail'/>

                <div className="bg-white p-2 position-absolute top-50 start-50 translate-middle w-75 shadow shadow-secondary d-flex align-item-center justify-content-around">
                  <p className='text-info fw-bold'>{cat?.text}</p>
                  <small className='fw-bold'>Shop</small>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="dods p-5">
        <div className="container ">
          <Slider slidesToShow={3} >
          <div className='me-4'>
              <h4>DEALS OF THE <br /> DAY</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="btn btn-sm btn-info">View More</button>
            </div>

            {products?.map((product, i) =>(
              <Link to={`/details/${product?.id}`} key={i} className=''>
                <img src={product?.img} alt="" className='d-block m-auto' />
                 <div className='d-flex justify-content-around align-items-center '>
                 <p className=''>{product?.price}</p>
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