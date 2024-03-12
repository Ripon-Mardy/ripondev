'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getData =async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts', {cache : 'no-store'});
  if(!response.ok) {
    throw new Error('Error to Fetch data')
  }
  return response.json();
  } catch (error) {
    console.error(error);
  }
}

const portfolio = async () => {
  const [show, setShow] = useState(1);
  const [loading, setLoading] = useState(true)

  const handleNumber = (numberTab, filterNumber) => {
    setShow(numberTab);
    console.log(filterNumber);
  };
const jsonData = await getData();
console.log(jsonData);
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
                onClick={() => handleNumber(1, "all")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 1 ? "bg-secondaryBgColor text-white" : "bg-white"
                  } `}
              >
                all
              </li>
              <li
                onClick={() => handleNumber(2, "landing page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 2 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Landing page
              </li>
              <li
                onClick={() => handleNumber(3, "nextjs page")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 3 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Next Js Page
              </li>
              <li
                onClick={() => handleNumber(4, "tailwind css")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 4 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Tailwind CSS
              </li>
              <li
                onClick={() => handleNumber(5, "e-Commerce")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 5 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                e-Commerce
              </li>
              <li
                onClick={() => handleNumber(6, "Bootstrap 5")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 6 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Bootstrap 5
              </li>
              <li
                onClick={() => handleNumber(7, "Business & Corporate")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 7 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Business & Corporate
              </li>
              <li
                onClick={() => handleNumber(8, "Portfolio")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 8 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Portfolio
              </li>
              <li
                onClick={() => handleNumber(9, "Educational")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 9 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Educational
              </li>
              <li
                onClick={() => handleNumber(10, "Form Valdation")}
                className={`border px-3 rounded font-semibold border-borderColor hover:bg-secondaryBgColor hover:text-white duration-300 ease-in-out  hover:border-borderColor cursor-pointer ${show === 10 ? "bg-secondaryBgColor text-white" : "bg-white"
                  }`}
              >
                Form Valdation
              </li>
            </ul>
          </div>

          <div>
              <div>
                {
                  jsonData.map((item, index) => (
                    <div className='mt-20' key={index}>
                      <Image className='w-56' width={40} height={40} src={item.image}></Image>
                      <div>
                        <Link href={item.project_Link} target='_blank'>Demo</Link>
                        <Link href={item.github}>Live</Link>
                      </div>
                    </div>
                  ))
                }
              </div>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
