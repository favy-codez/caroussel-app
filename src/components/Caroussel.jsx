import React from 'react'
import {CarousselItem} from './CarousselItem'

function Caroussel() {
   

  return (
    <div className='caroussel'>
        <div className='inner'>
            {items.map((item) => {
                return <CarousselItem item={item} />
            })}
        
        </div>
    </div>
  )
}

export default Caroussel
