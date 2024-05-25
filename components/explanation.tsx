"use client";


import { cn } from "@/utils/cn";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { IconBrandCouchdb, IconBrandMongodb, IconBrandOpenai, IconDatabase, IconPepper, IconSql, IconUser } from "@tabler/icons-react";
import DotPattern from "./magicui/dot-pattern";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto max-w-4xl min-w-0 space-y-2">
    <div
      className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl"
      ref={containerRef}
      >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <IconUser className="text-black" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2 text-black">
          <Circle ref={div1Ref}>
            <IconDatabase className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
            <IconBrandMongodb className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
            <IconBrandCouchdb className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
            <IconPepper className="h-6 w-6" />
          </Circle>
          <Circle ref={div5Ref}>
            <IconSql className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center text-black">
          <Circle ref={div6Ref} className="h-16 w-16">
            <IconBrandOpenai className="h-6 w-6" />
          </Circle>
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />

      {/* AnimatedBeams */}
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div7Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div7Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div7Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div7Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        />
    </div>
        </section>
  );
}