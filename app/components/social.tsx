import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
const Social = () => {
  const data = [
    {
      icon: <FaGithub />,
      path: "https://github.com/ankit13022",
    },
    {
      icon: <SiLeetcode />,
      path: "https://leetcode.com/u/ankit0987",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/ankit-kumar-612371235",
    },
    {
      icon: <SiCodeforces />,
      path: "https://codeforces.com/profile/ankit7890",
    },
    {
      icon: <SiCodechef />,
      path: "https://www.codechef.com/users/ankit1302",
    },
  ];
  return (
    <div className="flex gap-3 md:gap-5 xl:mb-0 ">
      {data.map((item, index) => {
        return (
          <Link
            href={item.path}
            className="xl:h-[30px] xl:w-[30px]  xl:bg-pink-50/20 flex justify-center items-center rounded-full hover:bg-accent ease-in-out duration-300 text-xl text-accent hover:text-white"
            key={index}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
