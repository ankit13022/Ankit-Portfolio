"use client";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import ExperienceCard from "../components/ExperienceCard";

const workExperienceData = [
  {
    role: "Fullstack Developer",
    company: "Marqstat Intelligence Private Limited",
    duration: "April 2024 - July 2024",
    description: [
      "Enhanced website functionality and efficiency, improving user experience and performance.",
      "Architected and maintained a robust admin dashboard leveraging Chart.js and Rough.js, streamlining workflows.",
      " Enhanced reporting speed by 40 percent and reduced manual data entry errors by 25 percent across the organization.",
      " Utilized Next.js for server-rendered applications, optimizing performance and SEO, while implementing responsive designs with Tailwind CSS for a consistent user interface across devices.",
    ],
    icon: <FaBriefcase />,
    iconBg: "bg-blue-500",
    link: "https://marqstats.com/",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center py-12 bg-gray-900 text-white"
    >
      <h3 className="text-lg font-medium mb-2">What i have done so far</h3>
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Work Experience.</h1>
      <div className="relative w-full">
        {workExperienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            company={experience.company}
            duration={experience.duration}
            description={experience.description}
            icon={experience.icon}
            iconBg={experience.iconBg}
            link={experience.link}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
