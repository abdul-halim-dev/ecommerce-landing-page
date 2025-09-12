import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Videosection = () => {
  return (
    <div className="w-full px-[10px] md:px-[55px] py-5 flex items-center justify-center flex-col gap-4 bg-videobg ">
      <div className=" w-full flex items-center justify-center flex-col gap-3">
        <Image
          src="/decent-logo.jpg"
          alt="Decent Logo"
          width={100}
          height={100}
        />
        <h1 className="text-[16px] leading-5 sm:leading-normal sm:text-[25px] text-center font-bold text-textcolor ">
          {" "}
          আমরা নিয়ে এসেছি মাইক্রো স্টিস কাপড়ের ফরমাল শার্ট, যা আপনার অফিস বা
          পার্টি তে ব্যবহারের জন্য বেস্ট চয়েজ হতে পারে ।
        </h1>
      </div>

     <div className="w-full relative" style={{ aspectRatio: '16/7' }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/jgPbqBMZEwY?si=0zcTI6cllbb6i8sF"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <div className="w-full flex items-center justify-center flex-col gap-4 sm:gap-6">
          <h1 className="font-extrabold sm:font-bold text-[20px] sm:text-[27px] text-textcolor ">
            রেগুলার প্রাইস:
            <span className="font-extrabold sm:font-bold text-[20px] sm:text-[27px] text-textcolor  ">
              ৯৫০ টাকা
            </span>
          </h1>

          <h1 className="font-extrabold sm:font-bold text-[20px] sm:text-[30px] text-[#e25000] ">
            অফার প্রাইজ:
            <span className="font-extrabold sm:font-bold text-[20px] sm:text-[30px] text-[#e25000]  ">
              {" "}
              ৬৫০ টাকা
            </span>
          </h1>
        </div>

        <div className="ww-full flex items-center flex-col gap-4 justify-center">
          <h1 className="font-bold text-[18px] text-center sm:text-[27px] text-black">
            {" "}
            → যেকোন ৩পিস বা তার অধিক শার্ট অর্ডার করলে
            <span className="font-bold text-[18px] sm:text-[27px] text-[#ff0000]  ">
              {" "}
              ডেলিভারি চার্জ ফ্রি
            </span>
          </h1>

          <Link
            href="/"
            className="inline-flex items-center justify-center py-2 px-[30px] bg-[#e9c10b] border-2 border-black rounded-[6px] text-[20px] sm:text-[30px] font-bold gap-2
             transform transition-transform duration-300 hover:scale-110 hover:bg-black hover:text-white"
          >
            <FaRegHandPointRight />
            অর্ডার করতে চাই
          </Link>

          <a
            className="bg-[#e7250b] border-[2px] font-bold border-white px-3 py-1 inline-flex items-center justify-center gap-2 text-white hover:bg-black duration-200 hover:scale-110 text-[17px] sm:text-[24px] "
            href="tel:+8801402495707"
          >
            <FaMobileAlt />
            কল করুন : 01402-495707
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
