"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FlipWords } from "./ui/flip-words";
import WordRotate from "./magicui/word-rotate";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/utils/cn";
import { IconChevronRight } from "@tabler/icons-react";

export default function Hero() {
  const words = ["better", "faster", "innovative", "confident"];
  return (
    <div className="mb-10 lg:mb-20">
      <HeroHighlight className="space-y-8 flex justify-center items-center flex-col">
        <div className="text-2xl px-4 md:text-4xl lg:text-4xl  font-bold text-neutral-700 dark:text-white  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          Kickstart your ML journey with
        <AnimatedGradientText>
       
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          FastML
        </span>
      </AnimatedGradientText>

        <p className="py-4 px-4 max-w-sm lg:max-w-xl text-base font-normal text-zinc-400 text-center mx-auto ">
            Jumpstart your project in seconds, bundled with built-in Data Ingestion, Processing, Modeling, Montioring, and Deployment!
          </p>
        </div>
        <div className="mx-40 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"

            className="dark:bg-black bg-white text-black dark:text-white flex min-w-0 text-nowrap  items-center space-x-2"
          >

            <a className="" href="https://fastml.lemonsqueezy.com/buy/6ae13a25-4014-4be2-8ce9-d5aaf817e71a?enabled=391880&checkout[discount_code]=LAUNCH">Get Started</a>
          </HoverBorderGradient>
        </div>
        {/* <motion.h1
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
     */}
      </HeroHighlight>
    </div>
  );
}
