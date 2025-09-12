import { FaArrowCircleRight } from "react-icons/fa";

import React from 'react'

const Details = () => {
  return (
    <div className='py-[20px] px-[10px] md:px-[55px] w-full flex sm:flex-row flex-col items-center justify-start gap-2 flex-wrap'>
    <h1 className='w-full text-[18px] rounded-[6px] sm:rounded-none sm:text-[25px] font-semibold text-white bg-active text-center py-2 '> আমাদের থেকে কেন শার্ট কিনবেন? </h1>
    
    <ul className='w-full flex flex-col gap-3 py-3 '>
        <li className=" w-full flex items-center justify-start gap-3 pb-3 border-b border-[#e5e5e5] ">  
            <FaArrowCircleRight className="text-[#204f8b] text-[26px] "/>
               <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f] ">  কমপ্লিট মাইক্রো স্টিস ফেব্রিক  </p>
        </li>
         
        <li className=" w-full flex items-center justify-start gap-3 pb-3 border-b border-[#e5e5e5] ">  
            <FaArrowCircleRight className="text-[#204f8b] text-[26px] "/>
               <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f] ">  
অন্যতম বৈশিষ্ট্য পারফেক্ট ফিটিংস   </p>
        </li>
         
        <li className=" w-full flex items-center justify-start gap-3 pb-3 border-b border-[#e5e5e5] ">  
            <FaArrowCircleRight className="text-[#204f8b] text-[26px] "/>
               <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f] ">  অফিস, বিজনেস মিটিং, ও ক্যাজুয়াল আউটিং সবখানে মানিয়ে যাবে মর্ডার্ন স্লিম ফিট কাটিং - </p>
        </li>
        <li className=" w-full flex items-center justify-start gap-3 pb-3 border-b border-[#e5e5e5] ">  
            <FaArrowCircleRight className="text-[#204f8b] text-[26px] "/>
               <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f] "> 
🚚 ফাস্ট ডেলিভারি ও ক্যাশ অন ডেলিভারি (COD) সুবিধা  </p>
        </li>
         


    </ul>
    
    </div>
  )
}

export default Details