"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';

const items = [
  {
    question: "How does KaaliDev work?",
    answer:
      "KaaliDev combines powerful creation tools, automation workflows, and cloud-ready infrastructure into one unified ecosystem. Everything is optimized for speed, reliability, and a seamless creator experience.",
  },
  {
    question: "Do I need technical experience to use KaaliDev?",
    answer:
      "Not at all. KaaliDev is designed to be intuitive for beginners while offering advanced capabilities for developers, creators, and teams who need deeper customization.",
  },
  {
    question: "Can I switch plans as my workflow grows?",
    answer:
      "Yes. You can upgrade or adjust your plan at any time. KaaliDev adapts to your workflow, whether you’re working solo or scaling with a large team.",
  },
  {
    question: "How secure is my data on KaaliDev?",
    answer:
      "We use enterprise-grade encryption, modern security protocols, and continuous monitoring to ensure your data stays protected across every layer of the platform.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
