"use client";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
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

  return (
    <div
      id="contact"
      className="min-h-screen w-full bg-gray-900 text-white flex flex-col justify-center items-center p-4 md:p-0"
    >
      <h2 className="text-center text-5xl font-semibold mb-8">Contact Me</h2>
      <ToastContainer />

      <div className="w-full md:w-5/6 mt-10 md:my-16 mx-auto flex flex-col md:flex-row justify-between rounded-xl gap-8">
        <div className="hidden md:block w-full md:w-1/2 h-full">
          <Image
            unoptimized={true}
            quality={100}
            alt="contact"
            src="/contact1.png"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 mx-6">
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
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <button
              disabled={loading}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
