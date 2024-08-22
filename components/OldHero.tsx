import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const OldHero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="text-center text-[40px] md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-myGradStart to-myGradEnd text-transparent bg-clip-text">
            Carter Schofield
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words="UX / UI Designer & Full Stack Developer"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Carter, a full-stack developer and a recent graduate
            from Utah Tech University.
          </p>

          <a
            href="https://docs.google.com/document/d/1XOha0lZPJL2CB5U6AuccBozHoMr5juBckbs4zublDm4/view?usp=sharing" // Replace with the actual path or URL to your resume
            target="_blank" // Opens the resume in a new tab
            rel="noopener noreferrer" // Adds a layer of security
          >
            <MagicButton
              title="View my Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OldHero;
