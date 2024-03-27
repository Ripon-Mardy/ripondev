"use client";
import React, { useState } from "react";
import Image from "next/image";
import formAction from "@/Actions/FormAction";

// === imports images
import axel from "@/images/axel.jpg";

// === imports icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = (e) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section className="pt-20 container mx-auto px-2 md:flex md:justify-between py-20">
        <div className="mx-auto w-full">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Me</h1>
          <form action={(e) => formAction(e)}  className="w-2/3 mx-auto">
            <div>
              <label htmlFor="Name" className="text-xl font-bold">
                Name
              </label>
              <input
                id="Name"
                className="border rounded w-full p-2 bg-gray-300 mt-1 mb-4 font-bold"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                name="name"
                required
              />
            </div>
            <div>
              <label className="text-xl font-bold" htmlFor="email">
                Email Address
              </label>
              <input
                className="border rounded w-full p-2 bg-gray-300 mt-2 mb-4 font-bold"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xl font-bold" htmlFor="Message">
                Message
              </label>
              <textarea
                rows={4}
                className="border rounded w-full p-2 bg-gray-300 mt-1 font-bold"
                id="Message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Message Me"
                name="message"
                required
              ></textarea>
            </div>
            <button
              className="mt-2 border text-xl p-1 px-4 rounded-md bg-bg-color text-white font-bold hover:bg-transparent ease-in-out duration-300 hover:text-black"
              type="submit"
            >
              Send
            </button>
          </form>
          {/* end form tag */}
        </div>
        <div className="mt-10 mx-auto md:mt-0 md:w-full">
          <div className="relative overflow-hidden w-80 mx-auto">
            <Image className="" src={axel} alt="Axel image"></Image>
            <div className="absolute left-0 bottom-0  backdrop-blur-md p-3 w-full">
              <div>
                <h1 className="text-xl font-extrabold text-center text-white -tracking-tighter">
                  Mardyripon10@gmail.com
                </h1>
                <h1 className="text-xl font-extrabold text-center text-white -tracking-tighter">
                  +8801320585642
                </h1>
                <ul className="flex justify-center items-center gap-6 mt-3">
                  <li className="text-2xl bg-gray-400 rounded-full p-2 hover:bg-transparent border cursor-pointer hover:ease-in-out duration-300 hover:text-white">
                    <FaFacebook />
                  </li>
                  <li className="text-2xl bg-gray-400 rounded-full p-2 hover:bg-transparent border cursor-pointer hover:ease-in-out duration-300 hover:text-white">
                    <FaInstagram />
                  </li>
                  <li className="text-2xl bg-gray-400 rounded-full p-2 hover:bg-transparent border cursor-pointer hover:ease-in-out duration-300 hover:text-white">
                    <FaLinkedin />
                  </li>
                  <li className="text-2xl bg-gray-400 rounded-full p-2 hover:bg-transparent border cursor-pointer hover:ease-in-out duration-300 hover:text-white">
                    <FaWhatsapp />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
