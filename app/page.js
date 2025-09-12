import React from 'react'
import Videosection from './components/videosection'
import Productcard from './components/productcard'
import Details from './components/details'

const page = () => {
  return (
    <div className='w-full  '>

 <Videosection/>
 <Productcard/>
 <Details/>
    </div>
  )
}

export default page