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
          <CardMedia component="img" height="140" image={path} alt={title} />
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
