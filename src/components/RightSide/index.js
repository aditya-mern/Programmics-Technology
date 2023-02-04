import React from 'react'
import InnerNav from '../InnerNav'
import Card from '../Card'
import "./index.css"

const RightSide = () => {
  return (
    
    <div className='right-side'>
<InnerNav />

<div className='card-container'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
</div>


    </div>
  )
}

export default RightSide