"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const imageCard = [
  { img: "/image1.jpg", id: 1, title: "Merron Color", alter: "red-shirt" },
  { img: "/image2.jpg", id: 2, title: "Olive Color", alter: "light-green-shirt" },
  { img: "/image3.jpg", id: 3, title: "Sea Green Color", alter: "Sea-Green-Color" },
  { img: "/image4.jpg", id: 4, title: "Sea Green Color", alter: "Sea-Green-Color" },
  { img: "/image5-1.webp", id: 5, title: "Sea Green Color", alter: "Sea-Green-Color" },
  { img: "/image6-1.webp", id: 6, title: "White Color", alter: "White-color" },
  { img: "/image7.jpg", id: 7, title: "Navy Blue Color", alter: "Navy-Blue-color" },
  { img: "/image6-1.webp", id: 8, title: "White Color", alter: "White-color" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Productcard = () => {
  return (
    <section className="py-6 px-[10px] md:px-[55px] w-full flex sm:flex-row flex-col items-center justify-center gap-4 flex-wrap">
      {imageCard.map((item, i) => (
        <motion.div
          key={item.id}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="w-full sm:w-[48%] flex flex-col gap-3"
        >
          {/* Image with hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={item.img}
              alt={item.alter}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f3f3f3] text-center py-2 shadow-md text-black font-semibold text-[18px] sm:text-[22px] rounded-md"
          >
            {item.title}
          </motion.h1>
        </motion.div>
      ))}
    </section>
  );
};

export default Productcard;
