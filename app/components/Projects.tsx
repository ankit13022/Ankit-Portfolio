"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  image: string;
  category: "Full Stack" | "Frontend" | "others" | "Javascript";
  githubLink?: string;
}

const projects: Project[] = [
  {
    name: "Chat App",
    description:
      "Developed a feature-rich Chat App using React, Context API and Node.js, Express, Mongoose. Implemented group chat and one-to-one chat functionalities for seamless real-time communication.",
    image: "/chat-app.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/chat-app",
  },
  {
    name: "Fiverr Clone",
    description:
      "Developed a Fiverr clone using React, Sass, JavaScript, and React Router for the frontend, and Express, Mongoose, JWT, bcrypt, and cookie-parser for secure authentication ",
    image: "/fiver-clone.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/fiver-clone",
  },
  {
    name: "Admin Dashboard",
    description:
      "Developed a admin dashboard using Next.js, Tailwind CSS, TypeScript, PDF.js and Express, Mongoose, JWT, and bcrypt with cookie-parser for secure authentication.",
    image: "/admindashboard.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/marqAdminFrontend",
  },
  {
    name: "Blog App",
    description:
      "Developed a Blog App using React, JavaScript, React Router, and Context API, and Node.js, Express, and Mongoose for the backend, with full CRUD operations.",
    image: "/blog-app.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/Blog",
  },
  {
    name: "MutiPlayer Tik-Tak-Toe",
    description:
      "Developed a real-time multiplayer Tik-Tak-Toe game using Socket.io, Node.js, HTML, CSS, and JavaScript. Implemented seamless connectivity and gameplay experience.",
    image: "/tiktaktoe.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/tiktaktoe",
  },
  {
    name: "Booking Website",
    description:
      "Built an booking website using Axios for HTTP requests, React and React Router for a dynamic frontend, and Express, Mongoose, and JWT for secure backend API development.",
    image: "/booking.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/GoBooking",
  },
  {
    name: "News App",
    description:
      "Developed an News-App using mordern web technology REACT, Jvascript, and Fetch API to retrieve any News from external sources. Get News category wise ",

    image: "/news-app.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/newsApp",
  },
  {
    name: "Image Gallery",
    description:
      "Developed an interactive image gallery with search functionality using React,Jvascript, and Fetch API to retrieve any images from external sources.",
    image: "/image-gallery.png",
    category: "Full Stack",
    githubLink: "https://github.com/ankit13022/imageGallery",
  },
  {
    name: "Resume Builder website",
    description:
      "Developed a resume builder website using modern NEXTJS. Implemented user-friendly features, including customizable templates, real-time preview, and Download your Resume.",

    image: "/resumebuilder.png",
    category: "Frontend",
    githubLink: "https://github.com/ankit13022/resumeBuilder",
  },
  {
    name: "Linkdin clone",
    description:
      "Design a comprehensive Linkdin clone using modern web technologies such as HTML, CSS. ",

    image: "/linkdin-clone.png",
    category: "Frontend",
    githubLink: "https://github.com/ankit13022/linkdinClone",
  },
  {
    name: "Google Word clone",
    description:
      "Designed a comprehensive Google Word clone using modern web technologies such as React, React-Quill, and JavaScript.  ",

    image: "/google-quill.png",
    category: "Frontend",
    githubLink: "https://github.com/ankit13022/Google-word",
  },
  {
    name: "Ecommerce",
    description:
      "Design an Ecommerce using mordern web technology REACT, Material-UI, Sass, and React Router for dynamic navigation and modern UI components. ",

    image: "/ecommerce.png",
    category: "Frontend",
    githubLink: "https://github.com/ankit13022/Ecommerce-frontend",
  },
  {
    name: "Postman Clone",
    description:
      "Created a Postman-like application using HTML5, CSS3, and JavaScript. Implemented features for sending HTTP requests, viewing responses.",

    image: "/postman-clone.png",
    category: "Javascript",
    githubLink: "https://github.com/ankit13022/postmanClone",
  },
  {
    name: "Note App",
    description:
      "Developed a feature-rich note-taking application using HTML5, CSS3, JavaScript. Implemented user-friendly interface for creating, editing, and organizing notes.",

    image: "/note-ap.png",
    category: "Javascript",
    githubLink: "https://github.com/ankit13022/noteApp",
  },
  {
    name: "Calculator",
    description:
      "A simple user-friendly calculator using HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division.",

    image: "/calc.png",
    category: "Javascript",
    githubLink: "https://github.com/ankit13022/calc",
  },
  {
    name: "Snake game",
    description:
      "Developed a classic Snake game using HTML, CSS, and JavaScript. Implemented dynamic game logic for smooth gameplay, including collision detection and score tracking.",
    image: "/snake.png",
    category: "Javascript",
    githubLink: "https://github.com/ankit13022/snake",
  },
  {
    name: "Running Clock",
    description:
      "Developed a classic Clock using HTML, CSS, and JavaScript. Implemented dynamic movement of clock needle.",
    image: "/clock.png",
    category: "Javascript",
    githubLink: "https://github.com/ankit13022/clock",
  },
  {
    name: "Form-validation-library",
    description:
      "An NPM package for validating forms, including password, email, and username fields.",

    image: "/form-validation.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/form-validation-library",
  },
  {
    name: "HTTP-Client-Library",
    description:
      "An NPM package for making HTTP requests, supporting GET, PUT, POST, and DELETE methods. ",

    image: "/http-client-library.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/http-client-library",
  },
  {
    name: "Image-processor-library",
    description:
      "An NPM package for converting JPG to PNG, resizing images, and cropping them as per requirements. ",

    image: "/image-processor.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/image-processor",
  },
  {
    name: "Weather-Chrome-Extension",
    description:
      "A Chrome extension that provides real-time weather updates and forecasts based on your location.",

    image: "/weather-extension.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/weather-chrome-extension",
  },
  {
    name: "ColorPicker-Extension",
    description:
      " A Chrome extension that allows users to pick , save and clear colors from any webpage. ",

    image: "/color-picker.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/colorPicker",
  },
  {
    name: "Website-Tracker-Extension",
    description:
      "A Chrome extension to track the time spent on specific websites.",

    image: "/tracker.png",
    category: "others",
    githubLink: "https://github.com/ankit13022/website_tracker",
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "Full Stack" | "Frontend" | "others" | "Javascript"
  >("Full Stack");

  const handleCategoryChange = (
    category: "Full Stack" | "Frontend" | "others" | "Javascript"
  ) => {
    setSelectedCategory(category);
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center min-h-screen py-16 bg-gray-900"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-8 gap-1 mx-2">
          {["Full Stack", "Frontend", "Javascript", "others"].map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  handleCategoryChange(
                    category as
                      | "Full Stack"
                      | "Frontend"
                      | "others"
                      | "Javascript"
                  )
                }
                className={`px-2 md:px-4 py-2 text-sm md:text-lg font-bold ${
                  selectedCategory === category
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "text-white border-b-2 border-transparent hover:border-white"
                } focus:outline-none`}
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6 md:mx-1">
          {projects
            .filter((project) => project.category === selectedCategory)
            .map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
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
      className="relative flex flex-col items-center gap-4 p-4 bg-sky-950 rounded-lg shadow-md"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full object-fill rounded-md mb-4"
        style={{ width: "full", height: "200px" }}
      />
      <h2 className="text-lg md:text-xl font-bold text-white">
        {project.name}
      </h2>
      <p className="text-gray-400 text-sm mx-3">{project.description}</p>
      {project.githubLink && (
        <Link href={project.githubLink} target="_blank">
          <FiGithub
            size={36}
            className="absolute top-2 right-2 text-white bg-gray-900 rounded-full p-1 cursor-pointer"
          />
        </Link>
      )}
    </motion.div>
  );
};

export default Projects;
