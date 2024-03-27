"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// ===== react icons ====
import { FaBars } from "react-icons/fa";

// ==== images impot section ====
import profileImage from "../../images/profile.jpg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const openNav = (tabNumber) => {
    setNavbar(!navbar);

    setActiveTab(tabNumber);
  };

  const [showbox, setShowbox] = useState(false);
  const boxToggle = (tabNumber) => {
    setShowbox(!showbox);

    setActiveTab(tabNumber)
  };

  return (
    <>
      <header className="w-full bg-white fixed z-10 shadow-xl">
        <div className=" container mx-auto py-2 md:py-0 flex items-center justify-between px-2 bg-white">
          {/* === logo_ left ===  */}
          <div className="logo_section cursor-pointer">
            <Link href="/" className="text-3xl font-extrabold text-black">
              Ripon_M
              {/* <span className="bg-secondaryBgColor hover:text-black text-center px-2 text-white rounded-lg font-extrabold ">
                M.
              </span> */}
            </Link>
          </div>
          {/* ==== navigation section -===  */}
          <div className="navigation_section">
            <nav className="flex">
              <ul
                id="hello"
                className={`flex text-xl md:gap-5 flex-col absolute w-full left-0 top-12 bg-white text-center py-3 md:flex md:flex-row md:top-0 md:relative z-40 ${navbar ? "block" : "hidden"
                  }`}
              >
                <Link
                  onClick={() => openNav(1)}
                  href="/"
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 font-bold ${activeTab === 1
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  Home
                </Link>
                <Link
                  onClick={() => openNav(2)}
                  href="/about"
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 duration-200 ease-in-out font-bold ${activeTab === 2
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  About
                </Link>
                <Link
                  onClick={() => openNav(3)}
                  href="/contact"
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 duration-200 ease-in-out font-bold ${activeTab === 3
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  Contact
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => openNav(4)}
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 duration-200 ease-in-out font-bold ${activeTab === 4
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  Portfolio
                </Link>
                <Link
                  href="/resume"
                  onClick={() => openNav(5)}
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 duration-200 ease-in-out font-bold ${activeTab === 5
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  Resume
                </Link>
                <Link
                  href="/others"
                  onClick={() => openNav(6)}
                  className={`hover:bg-secondaryBgColor hover:text-white rounded-lg px-4 py-1 duration-200 ease-in-out font-bold ${activeTab === 6
                    ? "bg-secondaryBgColor text-white"
                    : "text-black"
                    } `}
                >
                  Others
                </Link>
              </ul>
            </nav>
          </div>
          {/* === profile pic section ===  */}
          <div className="profile_section">
            <div className="flex items-center justify-center gap-6">
              <div
                className="cursor-pointer text-xl md:hidden"
                onClick={openNav}
              >
                {navbar ? <FaBars /> : <FaBars />}
                {/* < FaBars/> */}
              </div>
              <div className="relative">
                <Image
                  onClick={boxToggle}
                  src={profileImage}
                  className="rounded-full w-8 h-8 object-cover cursor-pointer md:w-10 md:h-10"
                  alt="Profile Image"
                />
                {showbox && (
                  <div className="bg-secondaryBgColor text-white w-40 text-center absolute -left-32 top-10 block z-10 py-3 rounded-xl ">
                    <h2 className="text-xl font-bold py-1 text-black border-b-2 border-borderColor">
                      Ripon M.
                    </h2>
                    <Link
                      onClick={() => boxToggle(7)}
                      href="/profile"
                      className={`text-xl capitalize block cursor-pointer py-2 hover:bg-black hover:text-white ${activeTab === 6 ? 'bg-secondaryBgColor text-white' : 'text-black'} `}
                    >
                      profile
                    </Link>
                    <Link
                      onClick={() => boxToggle(8)}
                      href="/gallary"
                      className={`text-xl capitalize block cursor-pointer py-2 hover:bg-black hover:text-white ${activeTab === 7 ? 'bg-secondaryBgColor text-white' : 'text-black'} `}
                    >
                      Gallary
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
