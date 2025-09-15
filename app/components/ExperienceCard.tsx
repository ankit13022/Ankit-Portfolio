import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface CardProps {
  role: string;
  company: string;
  duration: string;
  description: string[];
  icon: React.ReactNode;
  iconBg: string;
  reverse: boolean;
  link: string;
}

const ExperienceCard: React.FC<CardProps> = ({
  role,
  company,
  duration,
  description,
  icon,
  iconBg,
  reverse,
  link,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 100 : -100 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : reverse ? 100 : -100,
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center w-full"
    >
      <div className="w-5/6 md:w-2/3 p-12 text-center bg-[#1a2847] rounded-lg border border-violet-900 shadow-lg shadow-sky-800">
        <div className="flex flex-col items-center justify-center mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg} text-white`}
          >
            {icon}
          </div>
          <div className="m-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{role}</h2>
            <Link href={link}>
              <p className="text-lg italic mb-2">{company}</p>
            </Link>
            <p className="text-sm mb-4">{duration}</p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-left ml:ml-1 md:ml-16">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white h-20 w-2"></div>
    </motion.div>
  );
};

export default ExperienceCard;
