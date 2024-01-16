// components/Card.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as React from "react";


const ProjectCard = ({ ind, title, demoLink, githubLink, path }) => {
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
  <></>
  );
};

export default ProjectCard;
