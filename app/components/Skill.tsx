"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Tech {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Others";
}

const techStack: Tech[] = [
  { name: "JavaScript", icon: "/javascript.webp", category: "Frontend" },
  { name: "NextJS", icon: "/nextjs.svg", category: "Frontend" },
  { name: "ReactJS", icon: "/reactjs.webp", category: "Frontend" },
  { name: "Redux", icon: "/redux.webp", category: "Frontend" },
  { name: "TypeScript", icon: "/typescript.webp", category: "Frontend" },
  { name: "Tailwind", icon: "/tailwindcss.webp", category: "Frontend" },
  { name: "Material UI", icon: "/material-ui.webp", category: "Frontend" },
  { name: "Chakra UI", icon: "/chakra-ui.webp", category: "Frontend" },
  { name: "HTML5", icon: "/html-5.webp", category: "Frontend" },
  { name: "CSS3", icon: "/css3.webp", category: "Frontend" },
  { name: "Bootstrap", icon: "/bootstrap.webp", category: "Frontend" },
  { name: "Sass", icon: "/sass.webp", category: "Frontend" },
  { name: "NodeJS", icon: "/node-js.webp", category: "Backend" },
  { name: "ExpressJS", icon: "/express-js.webp", category: "Backend" },
  { name: "MongoDB", icon: "/mongo.webp", category: "Backend" },
  { name: "AWS", icon: "/amazon-web-services.webp", category: "Backend" },
  { name: "FireBase", icon: "/firebase.webp", category: "Backend" },
  { name: "Google-cloud", icon: "/google-logo.webp", category: "Backend" },
  { name: "JWT", icon: "/jwt.png", category: "Backend" },
  { name: "C", icon: "/c.png", category: "Others" },
  { name: "CPP", icon: "/cpp.png", category: "Others" },
  { name: "Python", icon: "/python.png", category: "Others" },
  { name: "Git", icon: "/git.webp", category: "Others" },
  { name: "Github", icon: "/github.webp", category: "Others" },
  { name: "Postman", icon: "/postman.png", category: "Others" },
  { name: "WebSocket", icon: "/websocket.png", category: "Others" },
];

const Skill: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "Frontend" | "Backend" | "Others"
  >("Frontend");

  const handleCategoryChange = (
    category: "Frontend" | "Backend" | "Others"
  ) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center  min-h-screen py-16 bg-gray-900">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Tech Stack
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 gap-1">
          <button
            onClick={() => handleCategoryChange("Frontend")}
            className={`px-4 py-2 font-bold ${
              selectedCategory === "Frontend"
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-white border-b-2 border-transparent hover:border-white"
            } focus:outline-none`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleCategoryChange("Backend")}
            className={`px-4 py-2 font-bold ${
              selectedCategory === "Backend"
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-white border-b-2 border-transparent hover:border-white"
            } focus:outline-none`}
          >
            Backend
          </button>
          <button
            onClick={() => handleCategoryChange("Others")}
            className={`px-4 py-2 font-bold ${
              selectedCategory === "Others"
                ? "text-purple-500 border-b-2 border-purple-500"
                : "text-white border-b-2 border-transparent hover:border-white"
            } focus:outline-none`}
          >
            Others
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mx-4">
          {techStack
            .filter((tech) => tech.category === selectedCategory)
            .map((tech) => (
              <TechItem key={tech.name} tech={tech} />
            ))}
        </div>
      </div>
    </div>
  );
};

const TechItem: React.FC<{ tech: Tech }> = ({ tech }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className=" bg-sky-950 rounded-full shadow-md p-5">
        <img
          src={tech.icon}
          alt={tech.name}
          className="md:w-16 md:h-16 w-12 h-12"
        />
      </div>
      <span className="text-white">{tech.name}</span>
    </motion.div>
  );
};

export default Skill;
