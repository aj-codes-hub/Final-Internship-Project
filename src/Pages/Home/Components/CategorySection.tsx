import React from "react";
import { motion } from "framer-motion";

import action from "../../../assets/images/action.png";
import romance from "../../../assets/images/romance.png";
import slice from "../../../assets/images/slice-of-life.png";
import mystery from "../../../assets/images/mystery.png";
import superhero from "../../../assets/images/superhero.png";
import drama from "../../../assets/images/drama.png";

import leftChar from "../../../assets/images/char-left-1.png";
import rightChar from "../../../assets/images/char-right-1.png";

interface CategoryItem {
  label: string;
  img: string;
}

const categories: CategoryItem[] = [
  { label: "Action", img: action },
  { label: "Romance", img: romance },
  { label: "Slice Of Life", img: slice },
  { label: "Mystery", img: mystery },
  { label: "Super Hero", img: superhero },
  { label: "Drama", img: drama },
];

const CategorySection: React.FC = () => {
  return (
<section className="relative w-full h-[950px] bg-[#030A1A] overflow-hidden text-white py-36 px-6">

      {/* BLUR ORBS */}
      
      <div className="absolute top-40 left-[169px] w-[273px] h-[208px] bg-gradient-to-br from-cyan-400/50 to-blue-100/50 blur-[197px] rounded-full rotate-[177.74deg]"></div>
      <div className="absolute bottom-40 left-[1422px] w-[273px] h-[288px] bg-gradient-to-br from-cyan-400/50 to-blue-100/50 blur-[197px] rounded-full rotate-[177.74deg]"></div>

      <div className="relative z-10 scale-[0.85] origin-top">

        {/* SIDE CHAR IMAGES */}
        <img
          src={leftChar}
          alt="left"
          className="hidden md:block absolute left-[179px] top-[1%] w-[267px] h-[185px] rounded-[120px] object-cover shadow-xl"
        />
        <img
          src={rightChar}
          alt="right"
          className="hidden md:block absolute right-[179px] top-[1%] w-[267px] h-[185px] rounded-[120px] object-cover shadow-xl"
        />

        {/* HEADER TEXT */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="opacity-70 text-[24px] font-normal leading-none"
          >
            How can we help
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-[32px] md:text-[32px] font-medium leading-[42px]"
          >
            Create, Explore & Read <br />
            Your Favorite Novel and Comic <br />
            Books
          </motion.h1>
        </div>

        {/* CATEGORY CARDS */}
        <div className="mt-16 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-[1170px]">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-[178px] h-[260px] bg-white/7 rounded-[16px] flex flex-col items-center justify-start p-4 hover:bg-white/20 transition cursor-pointer shadow-lg relative"
            >
              <motion.img
                src={c.img}
                alt={c.label}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-[148px] h-[150px] object-cover rounded-[12px]"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-[20px] font-bold leading-[20px] text-center"
              >
                {c.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
