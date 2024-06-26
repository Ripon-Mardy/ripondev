"use client";
import React from "react";
import "./Hero.css";
import Image from "next/image";

// ==== react icons import
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// === import images ===
import herorightImage from "../../images/axel.jpg";
import panda from '../../images/panda.png'
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero_section py-20 px-2 sm:px-4 ">
        <div className="container mx-auto  gap-6 md:grid md:grid-cols-2 md:mt-5 relative">
          {/* <div className="shadows absolute left-80 top-36"></div> */}
          {/* ==== hero left section ===  */}
          <div>
            <h5 className="text-sm uppercase text-red-400 font-bold">
              Hello ! welcome to my site
            </h5>
            <h1 className="text-3xl md:text-5xl  uppercase font-bold backgroundImage relative -tracking-tight mt-6">
              I'm Ripon Mardy
              <span className="font-extrabold text-text-color">Axel</span>
              <div className="w-12 absolute right-[28px] -bottom-[30px]">
              <Image layout="responsive" width={30} height={30} src={panda}></Image>
              </div>
            </h1>
            <h2 className="text-2xl md:text-3xl capitalize font-extrabold -tracking-tighter text-text-color mt-4 mb-3">
              Web Developer
            </h2>
            <p className="text-paraColor mt-1 mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              earum tempora officiis voluptatem ipsa, praesentium voluptas
              similique provident nesciunt rem laboriosam laudantium a iure
              commodi, facere perferendis maiores ullam accusamus.
            </p>
            <div className="relative">
            <Link
              className="inline-block bg-secondaryBgColor text-white px-4 py-2 font-semibold rounded-lg text-xl border-2 border-borderBgColor hover:bg-transparent hover:text-black duration-200 ease-in-out mr-6"
              href="/resume"
            >
              Resume
            </Link>
            <Link
              className="inline-block border-2 border-borderBgColor font-semibold mt-2 sm:mt-0 px-4 py-2 text-black rounded-lg text-xl hover:bg-secondaryBgColor duration-200 ease-in-out hover:text-white"
              href="/contact"
            >
              Contact Me
            </Link>
            <div className="absolute right-40 top-0 shadows"></div> 
            </div>
            
            
            <div className="border-b-4 border-borderBgColor w-36 mt-6 mx-auto md:mx-0 rounded-2xl"></div>
            <div className="socials_icons flex items-center justify-center md:justify-start mt-5 gap-3 md:gap-4">
              <a
                className="bg-secondaryBgColor p-2 rounded-full text-xl text-white border-2 hover:text-black duration-200 ease-in-out border-borderBgColor hover:bg-transparent"
                href="https://www.facebook.com/romenripon.mardi.1"
                target="_blank"
              >
                {" "}
                <BsFacebook />
              </a>
              <a
                className="bg-secondaryBgColor p-2 rounded-full text-xl text-white border-2 hover:text-black duration-200 ease-in-out border-borderBgColor hover:bg-transparent"
                href="https://www.instagram.com/axel_r.1/"
                target="_blank"
              >
                
                <BsInstagram />
              </a>
              <a
                className="bg-secondaryBgColor p-2 rounded-full text-xl text-white border-2 hover:text-black duration-200 ease-in-out border-borderBgColor hover:bg-transparent"
                href="https://www.linkedin.com/in/ripon-mardy-axel-bb2286249/"
                target="_blank"
              >
                
                <BsLinkedin />
              </a>
              <a
                className="bg-secondaryBgColor p-2 rounded-full text-xl text-white border-2 hover:text-black duration-200 ease-in-out border-borderBgColor hover:bg-transparent"
                href="https://github.com/Ripon-Mardy"
                target="_blank"
              >
                
                <BsGithub />
              </a>
             
            </div>
          </div>
          {/* === hero right section ===  */}
          <div className="image_container text-center mx-auto mt-10">
            <Image
            className="w-72 mx-auto md:w-auto md:mx-0"
              width={350}
              height={350}
              src={herorightImage}
              alt="Hero_picture"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
