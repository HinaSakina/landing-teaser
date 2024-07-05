import React from "react";
import { FooterItem, Footeritem } from "@/common/constant/FooterItem";
import { FaMedium } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import TextAnimated from "../Faq/component/TextAnimated";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center  ">
      <h1 className="text-3xl font-bold pl-12">
        Top AI models for Your Daily Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-6 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center">
        {FooterItem?.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            className="flex flex-col"
            key={index}
          >
            <h1 className="text-2xl font-bold py-3 px-2 md:px-2">

            </h1>
            <div className="md:px-2  px-2 flex">
              <Link href={item.child_1.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={index * 0.2}
                >
                  {item.child_1.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_2.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_2.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_3.href} className="">
                <TextAnimated
                  delay={1}
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                >
                  {item.child_3.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_4.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_4.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_5.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_5.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_6.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_6.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_7.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_7.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_8.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_8.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_9.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_9.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_10.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_10.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_11.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_11.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_12.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_12.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_13.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_13.title}
                </TextAnimated>
              </Link>
            </div>
          </ComponentTransition>
        ))}
      </div>
      <h1 className="text-3xl font-bold pl-12">
        Top AI models for Your Daily Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-8 h-auto w-full max-w-[1500px] place-content-center md:px-5 place-items-start md:place-items-center">
        {Footeritem?.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            className="flex flex-col"
            key={index}
          >
            <h1 className="text-2xl font-bold py-3 px-2 md:px-2">

            </h1>
            <div className="md:px-2  px-2 flex">
              <Link href={item.child_1.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={index * 0.2}
                >
                  {item.child_1.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_2.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_2.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_3.href} className="">
                <TextAnimated
                  delay={1}
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                >
                  {item.child_3.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_4.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_4.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_5.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_5.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_6.href} className="">
                <TextAnimated
                  className="text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_6.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_7.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_7.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_8.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_8.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_9.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_9.title}
                </TextAnimated>
              </Link>
            </div>
            <div className="md:px-2   px-2    flex">
              <Link href={item.child_10.href} className="">
                <TextAnimated
                  className=" text-base overflow-hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-800"
                  delay={1}
                >
                  {item.child_10.title}
                </TextAnimated>
              </Link>
            </div>

          </ComponentTransition>
        ))}
      </div>
      <div className="flex justify-center py-20 items-center flex-col ">
        <div className="gap-5 flex py-5 justify-center items-center w-full">
          <FaMedium size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaDiscord size={30} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm">© 2024 OmniGptLtd.All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
