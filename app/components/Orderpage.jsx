"use client";

import React from "react";
import { motion } from "framer-motion";
import PricingPage from "./Pricingpage";

const Orderpage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-[10px] md:px-[55px] py-5"
      id="orderpage"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-[2px] rounded-[8px] border-active w-full flex items-center justify-start flex-col gap-4 px-3 py-6"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          className="text-[17px] text-[#f00d0d] font-bold text-center"
        >
          অফারটি শেষ হওয়ার পূর্বেই নিচের দেওয়া অপশনে প্রোডাক্ট সিলেক্ট করে। 
          আপনার নাম, ঠিকানা ও মোবাইল নাম্বার দিয়ে অর্ডার টি কনফার্ম করুন।
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full"
        >
          <PricingPage />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Orderpage;
