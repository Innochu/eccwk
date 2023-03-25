import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import products from '../Components/product'

function Details() {

  const { id } = useParams()

  const data = products[id]

  console.log(data)


  const [num, setNum] = useState("hjbwdahj")

  const [apidata, setApiData] = useState([])

  function handleClick(){
   setNum("hello react")
  }

  
  useEffect(() =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '09bd6b60c1msh9e9aa94de5bcdcap1a4d64jsn23d5274a2fd6',
        'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
      }
    };
    
    fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple', options)
      .then(response => response.json())
      .then(response => setApiData(response.calories))
      .catch(err => console.error(err));
  }, [])

  useLayoutEffect(() =>{
    console.log("coming from uselayouteffect")
  }, [])


  

  console.log(apidata)

  return (
    <div className="details">
      <div className="container">
        <div className="row">
      
          <div className="col-md-6 col-12">
            <img src={data?.img} alt="details " className='img-fluid d-block m-auto'/>
          </div>

          <div className="col-md-6 col-12">
            <p>{data?.price}</p>
          </div>

              <h1>{num}</h1>

              <button onClick={() =>handleClick()}>change</button>

        </div>
      </div>
    </div>
  )
}

export default Details