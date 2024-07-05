import React from "react";
import FaqAccordian from "@/common/component/element/FaqAccordian";
import FaqsHeading from "@/common/component/element/FaqsHeading";

const Faq = () => {
  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
   <FaqsHeading/>
      <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      <FaqAccordian />
</div>

    </div>
  );
};

export default Faq;
