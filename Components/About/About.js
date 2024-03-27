import React from "react";
import Image from "next/image";
import Link from "next/link";

// === imports images ===
import aboutme from "../../images/about me.gif";
import imageCover from "../../images/image_cover.JPG";
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';

const About = () => {
  return (
    <>
      <div className="py-20 px-3">
        <h1 className=" text-4xl md:text-6xl mb-10 uppercase font-semibold -tracking-tighter">
          About me_
        </h1>

        <div>
          <div className="md:grid md:grid-cols-2 md:gap-8 items-center justify-center">
            <div className="mb-10">
              <Image
                className="rounded-md md:w-[600px]"
                width={100}
                height={100}
                layout="responsive"
                src={imageCover}
              ></Image>
            </div>
            <div>
              <span className="text-xl text-red-600 font-semibold ">
                Nickname_
              </span>
              <h1 className="text-5xl font-extrabold -tracking-tighter text-text-color mb-3">
                Axel R
              </h1>
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque laborum corporis doloribus ullam ex deleniti cum
                sequi dolores, numquam odio qui error. Ad, fugit veritatis ex
                voluptatibus aspernatur dignissimos eos?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt veritatis minus odit eaque natus ut quasi suscipit
                accusamus saepe repellendus!
              </p>
              <div>
                <div className="mt-5">
                  <Link
                    className="bg-secondaryBgColor text-xl p-1 px-3 text-white font-semibold rounded-md border shadow-md hover:bg-transparent hover:text-black hover:duration-300 hover:ease-in-out"
                    href="/resume"
                  >
                    Resume
                  </Link>
                </div>
                <div className="flex gap-5 mt-6 flex-wrap">
                  <Image className="w-32 h-32 object-cover  rounded-lg " src={image2}></Image>
                  <Image className="w-32 h-32 object-cover rounded-lg" src={image1}></Image>
                  <Image className="w-32 h-32 object-cover rounded-lg" src={image3}></Image>
                  <Image className="w-32 h-32 object-cover rounded-lg" src={image4}></Image>
                </div>
               <div className="mt-6">
               <Link className="bg-secondaryBgColor capitalize text-xl p-1 px-3 text-white font-semibold rounded-md border shadow-md hover:bg-transparent hover:text-black hover:duration-300 hover:ease-in-out" href='/gallary'>view Gallery</Link>
               </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Image
              className="w-96 mx-auto rounded-md"
              width={100}
              height={100}
              src={aboutme}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
