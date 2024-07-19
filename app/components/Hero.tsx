"use client";
import React from "react";
import Image from "next/image";
import heromain from "@/public/heromain.webp";
import wavingHand from "@/public/waving-hand.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-[90%]">
        <motion.div
          className="text-left w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-2 my-8">
            <Image
              unoptimized={true}
              alt="waving-hand"
              width={40}
              height={40}
              src={wavingHand}
              layout="fixed"
            />
            <p className="text-xl md:text-3xl">Hey</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            I'm Ankit Kumar
          </h2>
          <div className="flex flex-row items-start md:items-center gap-1.5 mb-6">
            <h2 className="text-xl md:text-3xl">I am into</h2>
            <div className="ml-2 text-violet-700 dark:text-violet-600 text-xl md:text-3xl font-medium">
              <TypeAnimation
                sequence={[
                  "Backend development",
                  1000,
                  "Frontend development",
                  1000,
                  "Fullstack development",
                  1000,
                  "Competitive programming",
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className="text-md md:text-lg mb-8">
            I focus on developing user-friendly web applications that meet the
            client's requirements, with attention to detail, scalability, and
            performance. Additionally, I am skilled in competitive programming.
          </p>
          <div className=" flex text-2xl mb-6 m-2 items-center">
            <FaEnvelope />
            <span className="text-lg text-white ml-2">
              Email :
              <span className=" text-purple-500">
                {" "}
                ankitdj13112002@gmail.com
              </span>
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#about"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              About Me
            </Link>
            <a
              href="/Ankit_kumar.pdf"
              download
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0 w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={heromain}
            alt="Ankit Kumar"
            width={400}
            height={400}
            className="rounded-full hidden md:block"
            layout="intrinsic"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
