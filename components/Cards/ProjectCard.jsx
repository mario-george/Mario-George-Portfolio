// components/Card.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa6";
import Button from "@mui/material/Button";

export function ActionAreaCard({ path, title, demoLink, githubLink, video }) {
  return (
    <Card>
      <div className="relative ">
        {!video ? (
<>
<CardMedia component="img" height="140" image={path} alt={title} />
<div className="flex items-center justify-center tracking-[0.2em] space-x-12 group absolute inset-0 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-500 opacity-0 group-hover:opacity-10 duration-300 transition-all" />
          <Link href={githubLink} passHref legacyBehavior>
            <a className="noopener noreferrer" target="_blank">
              <div className="relative text-4xl delay-100 translate-y-[1000%] group-hover:translate-y-0 duration-300 hover:scale-125 transition-all">
                <div className="relative bg-black rounded-full w-[100%] h-[100%] px-6 py-6 z-1" />
                <div className="absolute inset-0 transform translate-x-[6px] translate-y-[6px] z-30">
                  <FaCode className="text-white" />
                </div>
              </div>
            </a>
          </Link>
          <Link href={demoLink} passHref legacyBehavior>
            <a className="noopener noreferrer" target="_blank">
              <div className="rounded-full text-4xl translate-y-[1000%] group-hover:translate-y-0 transition-all delay-150 duration-300 hover:scale-125">
                <div className="relative bg-black rounded-full w-[100%] h-[100%] px-6 py-6 z-1" />
                <div className="absolute inset-0 transform translate-x-[6px] translate-y-[6px] z-30">
                  <FaEye className="text-white" />
                </div>
              </div>
            </a>
          </Link>
        </div>
</>   
        ) : (
          <CardMedia
            component="video"
            height="100"
            width="200"
            src={path}
            alt={title}
            className="max-w-[15rem] mx-auto z-100"
            allow="autoPlay"
            autoPlay
            controls
            muted
          />
        )}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" href={githubLink}>
          Repository Link
        </Button>
    {  demoLink && <Button size="small" target="_blank" href={demoLink}>
          Demo
        </Button>}
      </CardActions>
    </Card>
  );
}
const ProjectCard = ({ ind, title, demoLink, githubLink, path, video }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  let dir = "-100%";
  console.log(ind);
  if (ind % 2 == 0) dir = "100%";

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: dir });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: dir }}
      animate={controls}
      exit={{ opacity: 0, x: dir }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 shadow-md rounded-md "
    >
      <ActionAreaCard
        title={title}
        path={path}
        demoLink={demoLink}
        githubLink={githubLink}
        video={video}
      />
    </motion.div>
  );
};

export default ProjectCard;
