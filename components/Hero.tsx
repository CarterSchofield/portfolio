import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import cogImage from "@/public/cog.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pb-20 pt-20 md:pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-[150px] md:-top-[125px] h-screen"
          fill="white"
        />
        <Spotlight
          className="top-12 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative my-20 z-10">
        <div className="md:flex items-center">
          <div className="lg:w-[600px] md:w-[400px]">
            <h1 className="text-left text-[40px] md:text-6xl lg:text-8xl font-bold bg-gradient-to-l from-myGradStart to-myGradEnd text-transparent bg-clip-text">
              Carter Schofield
            </h1>
            <TextGenerateEffect
              className="text-left text-[24px] md:text-4xl lg:text-5xl lg:max-w-[525px]"
              words="UX / UI Designer & Full Stack Developer"
            />
          </div>
          <div className="mt-10 md:mt-0 md:h-[350px] lg:h-[500px] md:flex-1 relative">
            {/* <img
              src="./public/cog.png"
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            /> */}

            <Image
              priority={false}
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center pb-0 md:pb-10 pt-5 md:pt-16">
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-[600px]">
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
    </section>
  );
};

export default Hero;
