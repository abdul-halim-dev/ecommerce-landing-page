"use client";

import Image from "next/image";
import React from "react";
import { FaRegHandPointRight, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Videosection = () => {
  return (
    <section className="w-full px-[10px] md:px-[55px] py-8 flex flex-col items-center gap-6 bg-videobg">
      {/* Logo + Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <Image
          src="/decent-logo.jpg"
          alt="Decent Logo"
          width={100}
          height={100}
          className="rounded-full shadow-md"
        />
        <h1 className="text-[16px] sm:text-[25px] font-bold text-textcolor leading-6 sm:leading-normal max-w-3xl">
          আমরা নিয়ে এসেছি মাইক্রো স্টিস কাপড়ের ফরমাল শার্ট, যা আপনার অফিস বা
          পার্টি তে ব্যবহারের জন্য বেস্ট চয়েজ হতে পারে ।
        </h1>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full relative rounded-lg overflow-hidden shadow-lg"
        style={{ aspectRatio: "16/7" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/jgPbqBMZEwY?si=0zcTI6cllbb6i8sF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 sm:gap-6"
      >
        <h1 className="font-bold text-[20px] sm:text-[27px] text-textcolor">
          রেগুলার প্রাইস:
          <span className="ml-2">৯৫০ টাকা</span>
        </h1>

        <h1 className="font-bold text-[20px] sm:text-[30px] text-[#e25000]">
          অফার প্রাইজ:
          <span className="ml-2">৬৫০ টাকা</span>
        </h1>
      </motion.div>

      {/* Free Delivery Offer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <h1 className="font-bold text-[18px] sm:text-[27px] text-black">
          → যেকোন ৩পিস বা তার অধিক শার্ট অর্ডার করলে
          <span className="text-[#ff0000] ml-1">ডেলিভারি চার্জ ফ্রি</span>
        </h1>

        <a
          href="#orderpage"
          className="inline-flex items-center justify-center py-2 px-6 bg-[#e9c10b] border-2 border-black rounded-md text-[20px] sm:text-[30px] font-bold gap-2 transform transition-transform duration-300 hover:scale-110 hover:bg-black hover:text-white shadow-md"
        >
          <FaRegHandPointRight /> অর্ডার করতে চাই
        </a>

        <a
          href="tel:+8801402495707"
          className="bg-[#e7250b] border-[2px] border-white px-4 py-2 inline-flex items-center justify-center gap-2 text-white font-bold text-[17px] sm:text-[24px] rounded-md shadow-md transition duration-300 hover:bg-black hover:scale-110"
        >
          <FaMobileAlt /> কল করুন : 01402-495707
        </a>
      </motion.div>
    </section>
  );
};

export default Videosection;
