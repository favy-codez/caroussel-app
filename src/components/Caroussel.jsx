import React from 'react'
import CarousselItem from './CarousselItem'

function Caroussel() {
    const items = [
        {
            description : "blah blah blah",
            icon : require("../images/avatar-ali.png"),
        },
        {
            description : "blah blah blah",
            icon : require("../images/avatar-anisha.png"),
        },
        {
            description : "blah blah blah",
            icon : require("../images/avatar-richard.png"),
        },
    ]

  return (
    <div className='caroussel'>
        
        <CarousselItem/>
    </div>
  )
}

export default Caroussel
