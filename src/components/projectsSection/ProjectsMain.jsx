import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "MERN chat app",
    year: "JAN2023",
    align: "right",
    image: "./images/chat.jpg",
    link: "https://github.com/stephan231/Mern_chat-app",
  },
  {
    name: "Ecommerce API",
    year: "MAR2023",
    align: "left",
    image: "./images/ecommerce.jpg",
    link: "https://github.com/stephan231/Ecommerce_mern",
  },
  {
    name: "GPT-3",
    year: "SEPT2023",
    align: "right",
    image: "./images/gpt.jpg",
    link: "https://github.com/stephan231/GPT_3-react",
  },
  {
    name: "Restaurant App",
    year: "DEC2024",
    align: "left",
    image: "./images/res.jpg",
    link: "https://github.com/stephan231/react_restaurant",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
