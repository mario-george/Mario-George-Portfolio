//components
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/ImagesComponents/Bulb";
import Circles from "@/components/ImagesComponents/Circles";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/components/VariantsFramerMotion/VariantsObject";
import ProjectCard from "../../components/Cards/ProjectCard";
import ProjectData from "@/components/data/ProjectData";
const Work = () => {
  return (
    <>
      <div className=" bg-primary/30 py-36 flex items-center overflow-y-hidden">
        <Circles />
        <div className="container mx-auto overflow-y-hidden">
          <div className="flex flex-col xl:flex-row gap-x-8 mx-auto justify-center overflow-y-hidden">
            {/* Text */}
            <div
              className="overflow-y-hidden text-center justify-center flex xl:w-[30vw] mx-auto  flex-col lg:text-left  
          xl:mb-0 "
            >
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12 text-center"
              >
                My Projects<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className=" max-w-[400px] mx-auto text-center"
              >
                a captivating showcase of my passion for crafting exceptional
                websites.From responsive designs to seamless user interfaces.
                Whether you seek a stunning portfolio, an intuitive e-commerce
                platform, or a dynamic corporate site, I integrate imagination,
                practicality, and originality to ensure a blend of creativity
                and functionality. I have multiple skills with different
                programming languages making me a flexible web developer also
                have the ability to create Mobile Apps Using React Native.
              </motion.p>
            </div>
            {/* slider */}
            {/* will provide a way to change the order of the elements  */}
            {/* <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div> */}
          </div>
        </div>
        <Bulb />
      </div>
      <div className="bg-primary/30 pb-20 overflow-hidden ">
        <div className="container mx-auto grid grid-cols-1  gap-4 ">
          {ProjectData.slides.map((image) => {
            return image.images.map((project, i) => {
              const { githubLink, demoLink, title, path } = project;
              return (
                <ProjectCard
                  ind={i}
                  key={i}
                  title={title}
                  path={path}
                  demoLink={demoLink}
                  githubLink={githubLink}
                />
              );
            });
          })}
          <ProjectCard
            ind={100}
            key={100}
            title={"React Native Guess Number"}
            path={"/projects/videos/react-native-guess-number.mp4"}
            demoLink={false}
            githubLink={
              "https://github.com/mario-george/react-native-guess-number"
            }
            video={true}
          />{" "}
          <ProjectCard
            ind={101}
            key={101}
            title={"React Native Goal Tracker"}
            path={"/projects/videos/react-native-goal-tracker.mp4"}
            demoLink={false}
            githubLink={
              "https://github.com/mario-george/react-native-goals-tracker"
            }
            video={true}
          />
        </div>
      </div>
    </>
  );
};

export default Work;
