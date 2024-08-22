import React from "react";
import { Button } from "./ui/MovingBorders";
import { companies } from "@/data";

const About = () => {
  return (
    <div className="py-5 md:py-20" id="about">
      <h1 className="heading">
        About
        <span className="text-myBlue"> Me</span>
      </h1>
      <div className="w-full mt-12">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          containerClassName="md:col-span-full"
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                Hello! I&apos;m <span className="text-myBlue">Carter</span>!
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold ">
                I recently graduated from Utah Tech University with a
                bachelor&apos;s degree in Software Engineering. I&apos;m
                passionate about technology, entrepreneurship, and continuously
                learning new skills. My goal is to become a full-stack
                developer, mastering both front-end and back-end development.
              </p>
              <p className="text-start text-white-100 mt-3 font-semibold">
                I have a keen interest in UX/UI design and strive to create
                clean, organized, and user-friendly interfaces. I like to
                maintain a highly structured and efficient workflow, ensuring
                every project I work on is meticulously crafted and
                well-organized.
              </p>
              <p className="text-start text-white-100 mt-3 font-semibold">
                I&apos;m excited about the future and eager to contribute to
                innovative projects. Whether it&apos;s developing seamless user
                experiences or tackling complex back-end systems, I&apos;m
                always up for a challenge. Let&apos;s create something amazing
                together!
              </p>
            </div>
          </div>
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
            <img src={nameImg} alt={name} className="md:w-24 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
