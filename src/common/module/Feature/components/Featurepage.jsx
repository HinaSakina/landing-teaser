import React from "react";
import Link from "next/link";
import Image from "@/common/component/element/Image";
import { AllProessionItem } from "@/common/constant/Service";
import SectionHeading from "@/common/component/element/SectionHeading";
import { AiFillSliders } from "react-icons/ai";
import Button from "@/common/component/element/Button";
import ComponentTransition from "@/common/component/element/ComponentTransition";
export default function Featurepage({ Content }) {
  return (        
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading title="Professions" icon={<AiFillSliders size={30} />} />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
        A Resource Hub for All Your AI needs        </h1>
     
      </ComponentTransition>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
      {AllProessionItem.map((item, index) => (
        <ComponentTransition
          delay={index * 0.2}
          key={index}
          className="flex border-[1px] relative group z-[9] dark:border-white border-black hover:lg:border-black overflow-hidden rounded-3xl flex-col items-center text-center p-6"
        >
          <Link href={`/profession/${item.slug}`} key={item.slug} legacyBehavior>
            <a className="">
              <div className="absolute w-[100px] h-[100px] left-[-20%] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%] inset-0 rounded-full group-hover:lg:rounded-none translate-y-[50%] transition-all duration-500 bg-[#461cff] group-hover:lg:translate-y-[0%]"></div>
              <div className="absolute w-[100px] top-0 right-[-10%] h-[100px] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%]  rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-[#461cff] group-hover:lg:translate-y-[0%]"></div>
              <p className="flex justify-center">{item.icon}</p> 
              {item.img && (
                <Image src={item.img} alt={item.title} width={400} heigth={400} />
              )}
              <h1 className="text-2xl dark:text-white text-black  transition-all duration-300 font-semibold">
                {item.title}
              </h1>
              <p className="mt-2 dark:text-white text-black  transition-all duration-300">
                {item.desc}
              </p>
            </a>
          </Link>
        </ComponentTransition>
      ))}
    </div>
    <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href="/profession" className="w-full rounded-full">
          <Button
            title="View All Profesion"
            className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
          />
        </Link>
      </ComponentTransition>
      </div>
  );
}
