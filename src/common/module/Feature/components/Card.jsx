import React from "react";
import Link from "next/link";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
export default function Card({ content }) {

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
      {content.map ((item, index) => (
        <ComponentTransition
          delay={index * 0.2}
          key={index}
          className="flex border-[1px] relative group z-[9] dark:border-white border-black hover:lg:border-black overflow-hidden rounded-3xl flex-col items-center text-center p-6"
        >
          <Link href={`/profession/${item.slug}`} key={item.slug} legacyBehavior>
            <a className="">
              <div className="absolute w-[100px] h-[100px] left-[-20%] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%] inset-0 rounded-full group-hover:lg:rounded-none translate-y-[50%] transition-all duration-500 bg-[#0BCE7A] group-hover:lg:translate-y-[0%]"></div>
              <div className="absolute w-[100px] top-0 right-[-10%] h-[100px] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%]  rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-[#0BCE7A] group-hover:lg:translate-y-[0%]"></div>
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
   
  );
}
