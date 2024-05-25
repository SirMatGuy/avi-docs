"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Hero() {
  return (
    <div className="mb-10 lg:mb-20">
    <HeroHighlight className="space-y-12 ">
      <motion.h1
        initial={{
            opacity: 0,
            y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
        Simplify your ML workflow, maximize your impact.{" "}
      </motion.h1>
    <div className="mx-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        {/* <AceternityLogo /> */}
        <a href="https://mk18.lemonsqueezy.com/buy/5322a8e0-095e-4346-8e7e-726bf768b22e">Get Started</a>
      </HoverBorderGradient>
    </div>
    </HeroHighlight>
          </div>
  );
}
