import React from 'react'
import Videosection from './components/videosection'
import Productcard from './components/productcard'
import Details from './components/details'
import Orderpage from './components/Orderpage'
 
 

const page = () => {
  return (
    <div className='w-full  '>

 <Videosection/>
 <Productcard/>
 <Details/>
 <Orderpage/>
 
    </div>
  )
}

export default page