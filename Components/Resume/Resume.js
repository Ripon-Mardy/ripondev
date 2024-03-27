import React from "react";

const Resume = () => {
  return (
    <>
      <div className="py-24  flex-nowrap overflow-hidden px-2 md:px-0">
        <div>
          <h1 className="text-center text-3xl capitalize font-semibold mt-4 mb-1">
            Ripon Mardy Axel
          </h1>
          <div>
            <ul className="flex items-center justify-center gap-6 font-semibold">
              <li>+8801320585642</li>
              <li>mardyripon10@gmail.com</li>
              <a
                className="hover:underline"
                target="_blank"
                href="https://www.linkedin.com/in/ripon-mardy-axel-bb2286249/"
              >
                Linkdln
              </a>
            </ul>
          </div>
          <p className="text-xl my-3">
            Dynamic and skilled Web Developer with [X] years of experience in
            designing and implementing user-friendly, high-performance websites
            and web applications. Proficient in front-end and back-end
            development technologies, adept at collaborating with
            cross-functional teams to deliver projects within deadlines. Seeking
            an opportunity to leverage expertise in web development to
            contribute to innovative projects and drive business growth.
          </p>
          <hr className=" w-full bg-gray-300" />
        </div>

        <div className="mb-3">
          <h1 className="text-3xl font-semibold">Education:</h1>
         <div className="my-2">
         <h3 className="text-xl">
            Diploma in CSE
          </h3>
          <p>Aptouch Politecnic Inistitude</p>
         </div>
        </div>

        <hr />
        <div className="mt-3 mb-3">
          <h1 className="text-3xl font-semibold">Professional Experience:</h1>
          <ul className="list-disc pl-4">
            <li className="my-2 text-xl">
               Developed responsive websites and web applications from concept to
              deployment, ensuring high performance, usability, and scalability.
            </li>
            <li className="my-2 text-xl">
              Collaborated with design and marketing teams to translate
              wireframes and mockups into interactive, user-friendly interfaces.
            </li>
            <li className="my-2 text-xl">
              Implemented front-end and back-end functionalities using HTML,
              CSS, JavaScript, and PHP, adhering to best coding practices and
              industry standards.
            </li>
            <li className="my-2 text-xl">
              Integrated third-party APIs and web services to enhance website
              functionalities and user experience.
            </li>
          </ul>
        </div>
        <hr />
        <div className="mt-3">
          <h1 className="text-3xl font-semibold">Certifications:</h1>
          <div>
            <h1>[Relevant Certification 1], [Certifying Body], [Year]</h1>
            <h1>[Relevant Certification 2], [Certifying Body], [Year]</h1>
          </div>
        </div>
        <hr />
        <div className="mb-3 mt-3">
          <h1 className="text-3xl font-semibold">Projects:</h1>
          <h1>Jonosokti : <a href="https://jonosokti.com/" className="font-semibold hover:underline" target="_blank">Live view</a> </h1>
        </div>
        <hr />
        <div>
          <h1 className="text-3xl font-semibold">Additional Information:</h1>
          <ul>
            <li>Fluent in English language.</li>
            <li>Strong portfolio available at <a target="_blank" className="font-semibold hover:underline" href="https://riponmardy.com">riponmardy.com</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
