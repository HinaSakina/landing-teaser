"use client";
import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Card from "./component/Card";
import { motion } from "framer-motion";
import { translateInViewVariant } from "@/common/component/element/Transition";

const Service = () => {
  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
      <div>
        <motion.div
          className="flex justify-center py-5"
          initial="initial"
          whileInView="whileInview"
          variants={translateInViewVariant}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Large Language Models"
            icon={<MdOutlineMiscellaneousServices size={30} />}
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center flex-col"
          initial="initial"
          whileInView="whileInview"
          variants={translateInViewVariant}
          transition={{
            delay: 0.20,
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl py-5 text-center dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text bg-clip-text  md:w-[50%] text-transparent font-bold">
            Explore Models        </h1>

        </motion.div>
      </div>
      <Card />
    </div>
  );
};

export default Service;
