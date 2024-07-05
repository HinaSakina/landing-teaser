import React from 'react'
import Image from '@/common/component/element/Image'
import ComponentTransition from '@/common/component/element/ComponentTransition'
import LLMsContent from './LLMsContent'
import Faqs from './Faqs'
import Card from '../../Service/component/Card'
import SectionHeading from '@/common/component/element/SectionHeading'
import { SiKnowledgebase } from "react-icons/si";

const LLMsProfession = () => {
    return (

        <div className="h-auto max-w-[1500px] flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20  overflow-hidden">
            <div className="flex justify-center m-8 relative">
                <h1 className="text-[2.5rem]   items-center  font-bold">
                    [LLM Name] for [Profession Name]
                </h1>
            </div>
            <div className="flex  w-full justify-center items-center flex-col">
                <Image
                    src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    width={400}
                    height={400}
                    priority
                    className="md:h-[400px] md:w-[800px] w-full rounded-3xl"
                />
            </div>
            <div className="py-10 px-10 max-md:px-5 md:px-32 text-justify">
                <h2 className="text-2xl py-3 font-bold">Introduction to [LLM Name]</h2>
                <p className="pb-5 leading-relaxed">
                    [LLM Name] is a powerful language model designed to support [Profession Name] in their daily work. This AI-driven tool offers a range of capabilities that can enhance productivity, decision-making, and overall performance in the field of [Profession Name].
                </p>
                <p className="pb-5 leading-relaxed">
                    [LLM Name] seamlessly integrates into the workflows of [Profession Name], providing valuable support across various aspects of their role. From data analysis and content creation to problem-solving and strategic planning, this advanced AI model serves as an indispensable assistant, enabling professionals to achieve better results in less time.
                </p>
                <p className="pb-5 leading-relaxed">
                    As we explore the capabilities and benefits of [LLM Name], you&apos;ll discover how this innovative tool can transform your approach to [Profession Name] and help you stay ahead in your industry.
                </p>
            </div>
            <ComponentTransition className="flex justify-center py-5">
                <SectionHeading
                    title="Large Language Models"
                    icon={<SiKnowledgebase size={30} />}
                />
            </ComponentTransition>
            <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
                <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
                    Explore others Models for [Profession Name]
                </h1>
            </ComponentTransition>
            <Card />
            <LLMsContent />
            <div className="p-6 md:p-10 flex justify-center flex-wrap relative">
                <div className="absolute z-[-9] glowbg w-full md:w-[600px] h-[400px] top-[50px]"></div>
                <Faqs />
            </div>
        </div>
    )
}
export default LLMsProfession
