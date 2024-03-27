"use client";
import React from "react";
import Image from "next/image";
// === import images
import whatsapp from "@/images/technology/whatsapp.svg";

const Whatsapp = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+8801320585642", "_blank");
  };
  return (
    <>
      <div>
        <Image
          onClick={handleWhatsappClick}
          alt="whatsappIcon"
          className="fixed bottom-10 right-10 z-10 w-12 cursor-pointer md:w-16"
          src={whatsapp}
        ></Image>
      </div>
    </>
  );
};

export default Whatsapp;
