import React from 'react'
import ComponentTransition from './ComponentTransition'
import SectionHeading from './SectionHeading'
const FaqsHeading = () => {
  return (
    <div className="h-auto max-w-[1500px] ">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading
          title="I have a question 🤔"
        />
      </ComponentTransition>
      <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
          FAQ
        </h1>
      </ComponentTransition>
    </div>
  )
}

export default FaqsHeading
