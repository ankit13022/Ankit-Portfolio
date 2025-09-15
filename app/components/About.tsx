"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define types
type CardData = {
  title: string;
  imgSrc: string;
  alt: string;
};

type FadeInParams = {
  direction: "left" | "right" | "up" | "down";
  type: "spring" | "tween";
  delay: number;
  duration: number;
};

// Card data
const cardsData: CardData[] = [
  {
    title: "MERN Stack Developer",
    imgSrc: "/mern.png",
    alt: "Web Developer",
  },
  {
    title: "Software Developer",
    imgSrc: "/software.png",
    alt: "React Native Developer",
  },
  {
    title: "Full Stack Developer",
    imgSrc: "/fullstack.png",
    alt: "Backend Developer",
  },
  {
    title: "Competitive programmer",
    imgSrc: "/cp.png",
    alt: "Content Creator",
  },
];

// Fade-in animation function
const fadeIn = ({ direction, type, delay, duration }: FadeInParams) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 w-[90%]">
        <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">
          Introduction
        </h2>
        <h3 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-8">
          About me.
        </h3>
        <p className="mb-12 md:text-lg md:w-2/3 w-full">
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js.
          I&apos;m a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let&apos;s work together to bring your ideas to
          life!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-14">
          {cardsData.map((card, index) => (
            <Card key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ card: CardData; index: number }> = ({ card, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-[#1a2847] p-6 rounded-xl my-4 text-center border border-violet-900 shadow-lg shadow-sky-500/20 
             hover:scale-105 hover:shadow-sky-400/30 "
    >
      <img
        src={card.imgSrc}
        alt={card.alt}
        height={96}
        width={96}
        className="mx-auto my-8 rounded-full"
      />
      <h4 className="font-semibold text-xl my-8 mt-12">{card.title}</h4>
    </motion.div>
  );
};

export default About;
