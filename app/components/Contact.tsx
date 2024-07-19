"use client";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.min.css";
import dotenv from "dotenv";
dotenv.config();
const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: values.name,
          to_name: "Ankit",
          from_email: values.email,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL as string,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccess(true);
          setValues({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          setLoading(false);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-center text-5xl font-semibold mb-8">Contact Me</h2>
      <ToastContainer />

      <div className="w-full md:w-5/6 mt-10 md:my-16 mx-auto flex justify-between rounded-xl">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hidden md:block w-1/2 h-full"
        >
          <Image
            unoptimized={true}
            quality={100}
            alt="contact"
            src="/contact1.png"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 100 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1 mx-6"
        >
          <h3 className="text-2xl mb-4">Get in touch</h3>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            My inbox is always open! Whether you&apos;ve got a burning question
            or want to drop a friendly &quot;hello&quot;, I&apos;m all ears!
            Let&apos;s chat!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl"
          >
            <motion.input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            <motion.textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.button
              disabled={loading}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
