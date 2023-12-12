//components
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/ImagesComponents/Bulb";
import Circles from "@/components/ImagesComponents/Circles";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/components/VariantsFramerMotion/VariantsObject";
const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 
          xl:mb-0"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Projects<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
      a captivating showcase of my passion for crafting exceptional websites. Each project here embodies not just design finesse but a dedication to weaving digital experiences that captivate, engage, and inspire. From sleek, responsive designs to seamless user interfaces, every creation is a testament to my commitment to bringing visions to life. Whether you seek a stunning portfolio, an intuitive e-commerce platform, or a dynamic corporate site, I infuse creativity, functionality, and innovation into every project. Dive into my portfolio and let's collaborate to transform your digital aspirations into awe-inspiring realities.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
