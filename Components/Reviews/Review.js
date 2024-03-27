import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// ===== import images
import client1 from "../../images/client/client1.jpg";
import client2 from "../../images/client/client2.jpg";
import client3 from "../../images/client/client3.jpg";
import client4 from "../../images/client/client4.jpg";
import client5 from "../../images/client/client5.jpg";
import client6 from "../../images/client/client6.jpg";

// ===== import icons
import { FaFacebook } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./review.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Review() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 646);
    }; // end handle resizing
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // end useEffect

  return (
    <>
      <section className="py-14">
        <div>
          <h1 className="text-center text-2xl font-extrabold md:text-4xl">
            What my clients say
          </h1>
        </div>
        <div className="mt-6">
          {isMobile ? (
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client1}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Ruby King
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client2}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Tony Jhonson
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client3}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Axel R
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client4}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Albert Shone
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client5}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Jhon Doe
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client6}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Roby Desk
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client1}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Ruby King
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client2}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Tony Jhonson
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client3}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Axel R
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client4}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Albert Shone
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client5}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Jhon Doe
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="w-full px-10 mx-auto text-center">
                  <div className="w-full flex items-center justify-center  gap-5">
                    <div className="w-24 my-2">
                      <Image
                        className="rounded-full mx-auto"
                        width={100}
                        height={100}
                        src={client6}
                      ></Image>
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        Roby Desk
                        <FaFacebook className="text-xl text-gray-500" />
                      </h1>
                      <p className="text-gray-500">seo and founder</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos tempore obcaecati dolor assumenda. Iste quod dicta
                    reprehenderit, id odio blanditiis saepe aspernatur placeat
                    similique laudantium quaerat, amet dolore fugit voluptatem?
                  </p>
                </div>
              </SwiperSlide>
            
            
             
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}
