import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Web Master",
    company: "IEEE",
    date: "2023 -2024",
    responsibilities: [
      "Teaching web development and guiding team members.",
      "Assisting students with assignments and support.",
      "Maintaining the college website.",
    ],
  },
  {
    job: "Front-End  Intern",
    company: "Vernure",
    date: "2023 September -2024 March",
    responsibilities: [
      "Building responsive and interactive UIs.",
      "Developing reusable front-end components.",
      "Optimizing web performance.",
      "Enhancing user experience through innovation.",
    ],
  },
  {
    job: "Full stack developer",
    company: "Avasoft",
    date: "2024 - Present",
    responsibilities: [
      "Developing and maintaining web applications using MERN stack and Go.",
      "Collaborating on system architecture and scalable solutions.",
      "Optimizing performance and enhancing user experience.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
