import React from "react";
import Image from "next/image";

// ==== images import s
import html from "@/images/technology/html.png";
import css from "@/images/technology/css.png";
import js from "@/images/technology/js.png";
import nextjs from "@/images/technology/nextjs.png";
import nodejs from "@/images/technology/nodejs.png";
import react from "@/images/technology/react.png";
import mongodb from "@/images/technology/mongodb.png";
import Link from "next/link";

const Technology = () => {
  return (
    <>
      <section className="container mx-auto px-2 py-10">
        <div>
          <h4 className="text-center text-sm text-text-color uppercase font-semibold">
            as a web developer
          </h4>
          <h1 className="text-2xl text-center capitalize font-extrabold -tracking-tighter mt-3 md:text-4xl">
            What technologys i use
          </h1>
        </div>

        <div className="mt-6">
          <div className="flex justify-center items-center gap-8 md:gap-10">
            <Image className="w-20 md:w-32" src={html}></Image>
            <Image className="w-20 md:w-32" src={css}></Image>
            <Image className="w-20 md:w-32" src={js}></Image>
          </div>
          <div className="flex items-center justify-center gap-6 md:gap-20 mt-4">
            <Image className="w-20 md:w-32" src={nextjs}></Image>
            <Image className=" w-20 md:w-32" src={react}></Image>
            <Image className="w-20 md:w-32" src={nodejs}></Image>
            <Image className="w-20 md:w-32" src={mongodb}></Image>
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl font-semibold -tracking-tighter uppercase mt-3 mb-3">
            &
          </h1>
          <h1 className="flex justify-center items-center gap-4 text-2xl font-semibold md:text-4xl">
            Full Stack Framework
            <Image className="w-24 md:w-32" src={nextjs}></Image>
          </h1>
        </div>

        <div className="text-center mt-3">
          <Link href='/portfolio' className="bg-bg-color text-white text-xl p-2 px-4 capitalize font-semibold rounded-xl border-borderColor hover:bg-transparent duration-300 ease-in-out hover:text-black hover:border border hover:border-borderColor">
            view projects
          </Link>
        </div>
      </section>
    </>
  );
};

export default Technology;
