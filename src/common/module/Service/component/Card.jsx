import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { CardContent } from "@/common/constant/CardItem";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
      {CardContent?.map((item, index) => (
      <ComponentTransition key={index} className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        {item.icon}
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        {item.title}
        </h1>
        <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
          {item.description}
        </h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
       {item.text}
        </p>
      </ComponentTransition>
      ))}
    </div>
  );
};

export default Card;
