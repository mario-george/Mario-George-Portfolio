import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { SiPytorch } from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "Technology Stack",
    info: [
      {
        title: "Web Development",
        icons: [
          <SiNextdotjs key="nextdotjs" />,
          <FaReact key="react" />,
          <SiTailwindcss key="tailwind" />,

          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <SiFramer key="framer" />,
        ],
      },
      {
        title: "Artificial Intelligence",
        icons: [<FaPython key="python" />, <SiPytorch key="pytorch" />],
      },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "React - The Complete Guide 2023 (incl. React Router & Redux) ",
        stage: "2021",
      },
      {
        title: "The Ultimate Next.js 14+ Crash course Master Web Development",
        stage: "2021",
      },
    ],
  },
];

//Components
import MainAvatar from "@/components/ImagesComponents/MainAvatar";
import Circles from "@/components/ImagesComponents/Circles";
//Fromer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/components/VariantsFramerMotion/VariantsObject";
//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-screen bg-primary/30 text-center xl:text-left  py-36">
      <Circles />
      {/* avatar Img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[280px] w-[50%] h-[80%]"
      >
        <MainAvatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            A little <span className="text-accent">about me.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Respectful self-motivator gifted at finding reliable solutions for
            software issues. Proficient in React and Next.js, adept at
            leveraging TailwindCSS and Framer Motion to create dynamic user
            interfaces. Well-versed in collaborating within cross-cultural,
            global teams and fluent in English.{" "}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 z-30"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Years <br /> on the market
                </div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={199} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Trusted Clients
                </div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={99} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Successful Projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={399} duration={5} /> +
                </div>
                <div
                  className="text-xs uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Solved Problems
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                  cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-30`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                  items-center text-white/60"
                >
                  {/* Title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
