"use client";

import { FaArrowCircleRight, FaOpencart } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  "কমপ্লিট মাইক্রো স্টিস ফেব্রিক",
  "অন্যতম বৈশিষ্ট্য পারফেক্ট ফিটিংস",
  "অফিস, বিজনেস মিটিং, ও ক্যাজুয়াল আউটিং সবখানে মানিয়ে যাবে মর্ডার্ন স্লিম ফিট কাটিং",
  "🚚 ফাস্ট ডেলিভারি ও ক্যাশ অন ডেলিভারি (COD) সুবিধা",
];

const sizes = [
  "সাইজ M = বডি 38'' দৈর্ঘ্য 28'' (15 size)",
  "সাইজ L = বডি 40'' দৈর্ঘ্য 29'' (15.5 size)",
  "সাইজ XL = বডি 42'' দৈর্ঘ্য 30'' (16 size)",
  "সাইজ XXL = বডি 44'' দৈর্ঘ্য 31'' (16.5 size)",
  "সাইজ 3XL = বডি 46'' দৈর্ঘ্য 31'' (17 size)",
];

const listVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Details = () => {
  return (
    <section className="py-[20px] px-[10px] md:px-[55px] w-full flex sm:flex-row flex-col items-center justify-start gap-2 flex-wrap">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-[18px] sm:text-[25px] font-semibold text-white bg-active text-center py-2 rounded-[6px] sm:rounded-none"
      >
        আমাদের থেকে কেন শার্ট কিনবেন?
      </motion.h1>

      {/* Features List */}
      <ul className="w-full flex flex-col gap-3 py-5">
        {features.map((text, i) => (
          <motion.li
            key={i}
            custom={i}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex items-center gap-3 pb-3 border-b border-[#e5e5e5]"
          >
            <FaArrowCircleRight className="text-[#204f8b] text-[26px]" />
            <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f]">
              {text}
            </p>
          </motion.li>
        ))}
      </ul>

      {/* Order Button + Size Guide */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center gap-4"
      >
        <Link
          href="#orderpage"
          className="inline-flex items-center justify-center py-2 w-[320px] bg-[#e9c10b] border-2 border-black rounded-[6px] text-[20px] sm:text-[30px] font-bold gap-2 transition-transform duration-300 hover:scale-110 hover:bg-black hover:text-white"
        >
          <FaOpencart /> অর্ডার করতে চাই
        </Link>

        <h1 className="w-full text-[18px] sm:text-[25px] font-semibold text-white bg-active text-center py-2 rounded-[6px] sm:rounded-none">
          📏 সাইজ গাইড
        </h1>
      </motion.div>

      {/* Size List */}
      <ul className="w-full flex flex-col gap-3 py-4">
        {sizes.map((size, i) => (
          <motion.li
            key={i}
            custom={i}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex items-center gap-3 pb-3 border-b border-[#e5e5e5]"
          >
            <FaArrowCircleRight className="text-[#204f8b] text-[26px]" />
            <p className="text-[15px] sm:text-[24px] font-[600] text-[#1f1f1f]">
              {size}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Details;
