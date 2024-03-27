"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import jsonData from "@/JsonData/json.json";

const page = () => {
  // useEffect(() => {
  //   setFilterConntent(jsonData)
  // })

  const [selectCategory, setSelectCategory] = useState("all");
  const [filterContent, setFilterConntent] = useState(jsonData);

  const handleClick = (tabnumer) => {
    setSelectCategory(tabnumer);
    console.log(tabnumer);

    if (tabnumer === "all") {
      setFilterConntent(jsonData);
    } else {
      const filterdItem = jsonData.filter((item) => item.category === tabnumer);
      console.log(filterdItem);
      setFilterConntent(filterdItem);
    }
  };

  return (
    <>
      <section className="py-20 px-3">
        <h1 className=" text-6xl mb-10 uppercase font-semibold -tracking-tighter">
          My Portfolio
        </h1>
        <div className="mt-4">
          <div>
            <ul className="flex flex-wrap gap-3 capitalize font-semibold">
              <li
                onClick={() => handleClick("all")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "all"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                all
              </li>
              <li
                onClick={() => handleClick("landing page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "landing page"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                }`}
              >
                Landing page
              </li>
              <li
                onClick={() => handleClick("Next Js Page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Next Js Page"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                Next Js Page
              </li>

              <li
                onClick={() => handleClick("e-Commerce")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "e-Commerce"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                e-Commerce
              </li>
              <li
                onClick={() => handleClick("Business & Corporate")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Business & Corporate"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                Business & Corporate
              </li>
              <li
                onClick={() => handleClick("Portfolio")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Portfolio"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                }`}
              >
                Portfolio
              </li>
              <li
                onClick={() => handleClick("Educational")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Educational"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                Educational
              </li>
              <li
                onClick={() => handleClick("Form Valdation")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Form Valdation"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                Form Valdation
              </li>
              <li
                onClick={() => handleClick("Creative")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${
                  selectCategory === "Creative"
                    ? "bg-secondaryBgColor text-white"
                    : "bg-white text-black"
                } `}
              >
                Creative
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-3 xl:grid-cols-4 md:gap-7 xl:gap-10 ">
            {filterContent.map((item, index) => (
              <div
                className="shadow-lg p-1 border hover:shadow-2xl ease-in-out duration-200"
                key={index}
              >
                <h1 className="text-center text-xl py-3 font-semibold border-b-2">
                  {item.category}
                </h1>
                <div>
                  <Image
                    className="w-full h-full object-cover "
                    width={40}
                    layout="responsive"
                    height={40}
                    alt="portfolio"
                    src={item.image}
                  ></Image>
                  <div className="flex items-center justify-between py-3 ml-1 mr-1">
                    <a
                      className="bg-secondaryBgColor p-1 px-4 text-white font-semibold rounded-xl"
                      target="_blank"
                      href={item.github}
                    >
                      Github
                    </a>
                    <a
                      className="bg-secondaryBgColor p-1 px-4 text-white font-semibold rounded-xl"
                      target="_blank"
                      href={item.project_Link}
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
