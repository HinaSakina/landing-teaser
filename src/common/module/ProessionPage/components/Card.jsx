import React from 'react'
import ComponentTransition from '@/common/component/element/ComponentTransition'
import Image from '@/common/component/element/Image'
import SectionHeading from '@/common/component/element/SectionHeading'
import { SiKnowledgebase } from "react-icons/si";
const Card = () => {
    return (
        <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
            <ComponentTransition className="flex justify-center py-5">
                <SectionHeading
                    title="You may be interested"
                    icon={<SiKnowledgebase size={30} />}
                />
            </ComponentTransition>
            <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
                <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
                    Featured AI Blogposts
                </h1>
            </ComponentTransition>
            <div className="py-10 flex gap-10 flex-row justify-center relative flex-wrap">
                <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
                <ComponentTransition
                    className="w-full h-[350px] group md:basis-[30%] overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl"
                    delay={0.1}
                >
                    <div className="w-full h-[190px] overflow-hidden">
                        <Image
                            src='/img1.png'
                            alt="Header Image"
                            width={400}
                            height={400}
                            loading="lazy"
                            className="w-full h-auto group-hover:scale-125 transition-all duration-300  object-cover scale-110"
                        />
                    </div>
                    <div className="px-5 py-5">
                        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                            Effortless Integration
                        </h1>
                        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-300">
                            Discover a world of effortless integration with Teaser. Our SaaS solution streamlines your processes
                        </p>
                    </div>
                </ComponentTransition>
                <ComponentTransition
                    className="w-full h-[350px] group md:basis-[30%] overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl"
                    delay={0.1}
                >
                    <div className="w-full h-[190px] overflow-hidden">
                        <Image
                            src='/img.png'
                            alt="Header Image"
                            width={400}
                            height={400}
                            loading="lazy"
                            className="w-full h-auto group-hover:scale-125 transition-all duration-300  object-cover scale-110"
                        />
                    </div>
                    <div className="px-5 py-5">
                        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                            Optimized Operations
                        </h1>
                        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-300">
                            Optimize your operations with Teaser&apos;s dynamic SaaS solution. Experience a powerhouse of features that elevate efficiency and effectiveness      </p>
                    </div>
                </ComponentTransition>
                <ComponentTransition
                    className="w-full h-[350px] group md:basis-[30%] overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl"
                    delay={0.1}
                >
                    <div className="w-full h-[190px] overflow-hidden">
                        <Image
                            src='/solution.png'
                            alt="Header Image"
                            width={400}
                            height={400}
                            loading="lazy"
                            className="w-full h-auto group-hover:scale-125 transition-all duration-300  object-cover scale-110"
                        />
                    </div>
                    <div className="px-5 py-5">
                        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                            24/7 Accessibility
                        </h1>
                        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-300">
                            Embrace unparalleled accessibility with Teaser&apos;s SaaS solution. Whether in the office or on the go      </p>
                    </div>
                </ComponentTransition>
            </div>
        </div>
    )
}

export default Card
