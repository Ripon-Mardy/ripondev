import React from "react";
import "./Footer.css";
import Image from "next/image";
// === import images ===
import logoImage from "../../images/favicon-32x32.png";
// === react icons
import { BsYoutube } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="bg-footerBackground py-6">
        <div className="container mx-auto px-2">
          <div className="text-white border-b-2 pb-3 border-borderBgColor sm:grid sm:grid-cols-2 sm:gap-10 xl:grid-cols-4">
            <div>
              <div className="flex items-start justify-start">
                <Image className="w-12" src={logoImage}></Image>
                <h1 className="text-3xl font-bold ml-1">ipon M.</h1>
              </div>

              <h2 className="text-2xl font-bold my-3">Web Developer.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                obcaecati fugiat accusantium temporibus consequuntur excepturi
                minus laborum, ipsam sunt doloremque, facere magni ea suscipit.
                Est quidem recusandae vitae pariatur animi?
              </p>
            </div>
            {/* ==== qhuick links == */}
            <div className="mt-5 sm:mt-0">
              <h1 className="border-b-2 border-borderBgColor pb-2 text-2xl font-bold">
                Quick Links
              </h1>
              <ul className="navigation_list">
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Home
                </li>
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  About
                </li>
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Portfolio
                </li>
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Contact
                </li>
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Others
                </li>
              </ul>
            </div>
            {/* === links ===  */}
            <div className="mt-5 sm:mt-0">
              <h1 className="border-b-2 border-borderBgColor pb-2 text-2xl font-bold">
                Link
              </h1>
              <ul className="navigation_list">
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Profile
                </li>
                <li className="flex items-center justify-start text-lg py-3">
                  {" "}
                  <span className="text-lg mr-1">
                    <BiCaretRight />
                  </span>{" "}
                  Gallary
                </li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="border-b-2 border-borderBgColor text-2xl font-bold pb-2">
                Youtube
              </h1>
              <h1 className="flex items-center justify-start text-xl mt-4">
                {" "}
                <span className="text-xl text-red-700 mr-1">
                  {" "}
                  <BsYoutube />{" "}
                </span>{" "}
                Subscribe my youtube channel
              </h1>
              <a
                className="text-lg inline-block px-5 py-3 text-white border border-red-600 bg-red-600 mt-3 rounded-lg hover:bg-transparent hover:border hover:border-white font-semibold duration-200 ease-in-out"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
          {/* === socials icons ====  */}
          <div className="flex items-center justify-center flex-wrap gap-4 pt-3 text-xl text-white  ">
            <a href="https://www.facebook.com/romenripon.mardi.1" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/axel_r.1/" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ripon-mardy-axel-bb2286249/" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsLinkedin />
            </a>
            <a href="https://github.com/Ripon-Mardy" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsGithub />
            </a>
            <a href="https://twitter.com/MardyAxel" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UC2yGQ2bMW_VG4j5MESnTWjg" target="_blank" className="bg-secondaryBgColor cursor-pointer p-3 rounded-full border border-borderBgColor hover:bg-transparent hover:border-borderBgColor duration-200 ease-in-out">
              <BsYoutube />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
