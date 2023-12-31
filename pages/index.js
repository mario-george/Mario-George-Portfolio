// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ImagesComponents/ProjectsButton";
import MainAvatar from "@/components/ImagesComponents/MainAvatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../components/VariantsFramerMotion/VariantsObject";
import DownloadCV from "@/components/Buttons/DownloadCV";
import PreviewCV from "@/components/Buttons/PreviewCV";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen xl:h-screen relative overflow-hidden  py-36 lg:py-0  ">
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* background image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge "></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[700px] max-h-[643px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <MainAvatar />
        </motion.div>
      </div>

      {/* text */}
      <div className="w-full h-full relative bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Effective solutions <br /> for{" "}
            <span className="text-accent">your business</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Creation of websites that increase sales, improve customer
            interaction and increase brand awareness.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative flex-col">
            <ProjectsBtn />
            <div className="flex gap-x-3">
              <DownloadCV mob={true} />
              <PreviewCV mob={true} />
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex gap-x-3"
          >
            <ProjectsBtn />
            <DownloadCV />
            <PreviewCV />
          </motion.div>
 
        </div>
      </div>
    </div>
  );
};

export default Home;
