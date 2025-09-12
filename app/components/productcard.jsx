import Image from 'next/image'
import React from 'react'

const Productcard = () => {
  const imageCard = [
    { img:'/image1.jpg', id:1, title:"Merron Color", alter:'red-shirt'},
    { img:'/image2.jpg', id:2 , title:"Olive Color", alter:'light-green-shirt'},
    { img:'/image3.jpg', id:3, title:"Sea Green Color", alter:'Sea-Green-Color'},
    { img:'/image4.jpg', id:4, title:"Sea Green Color", alter:'Sea-Green-Color'},
    { img:'/image5-1.webp', id:5, title:"Sea Green Color", alter:'Sea-Green-Color'},
    { img:'/image6-1.webp', id:6,  title:"White Color", alter:'White-color'},
    { img:'/image7.jpg', id:7, title:"Navy Blue Color", alter:'Navy-Blue-color'},
    { img:'/image6-1.webp', id:8,  title:"White Color", alter:'White-color'},
  ]

  return (
    <div className='py-[20px] px-[10px] md:px-[55px] w-full flex sm:flex-row flex-col items-center justify-center gap-2 flex-wrap'>
      {imageCard.map((item)=>(
        <div key={item.id} className="w-full sm:w-[48%] flex flex-col gap-3">
          {/* Parent div must be relative and have a height */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src={item.img}
              alt={item.alter}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="bg-[#d8d8d8] text-center py-1 shadow text-black font-semibold text-[18px] sm:text-[22px]">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  )
}

export default Productcard
