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
import CircleShadow from "../../../Components/layout/CircleShadow";

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
<section className="relative w-full max-w-[1920px] mx-auto md:h-[950px] h-auto text-white py-36 mb-40">


    <CircleShadow  className="top-[22%] left-[15%]"/>

    <CircleShadow  className="top-[58%] left-[77%]"/>

      <div className="relative z-10 origin-top  max-w-[1160px] w-full mx-auto">

        {/* SIDE CHAR IMAGES */}
        <img
          src={leftChar}
          alt="left"
          className="hidden lg:block absolute left-0 top-[1%] w-[267px] h-[185px] rounded-[120px] object-cover shadow-xl"
        />
        <img
          src={rightChar}
          alt="right"
          className="hidden lg:block absolute right-0 top-[1%] w-[267px] h-[185px] rounded-[120px] object-cover shadow-xl"
        />

        {/* HEADER TEXT */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="opacity-70 text-[24px] font-thin leading-none"
          >
            How can we help
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-[32px] md:text-[32px] font-medium leading-[42px]"
          >
            Create, Explore & Read <br />
            Your Favorite Novel and Comic <br />
            Books
          </motion.h1>
        </div>

        {/* CATEGORY CARDS */}
        <div className="mt-16 justify-between max-w-[1170px]
                       grid
                       grid-cols-1 
                       sm:grid-cols-3 
                       md:grid-cols-4
                       lg:md:grid-cols-6
                       xl:md:grid-cols-6
        ">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mx-auto lg:h-[260px] bg-white/7 rounded-[16px] mt-2 flex flex-col items-center justify-start p-4 hover:bg-white/20 transition cursor-pointer shadow-lg relative
                         w-[90%] 
                         sm:w-[80%] 
                         md:w-[90%] 
                         lg:w-[90%] 
                         xl:w-[178px] 
              "
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
