import React, { useEffect, useState } from 'react'

const BrowseCars = () => {
  const [cars, setCars] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/cars").then(res=>res.json()).then(data=>setCars(data))
  },[])


  return (
    <div className=''>
      <h1>Browse Cars</h1>
      <ul>
        {cars.map(car=>(<li key={car._id}>{car.carName}</li>))}
      </ul>
    </div>
  )
}

export default BrowseCars