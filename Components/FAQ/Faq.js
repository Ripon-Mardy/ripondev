import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/faq");
      if (!response.ok) {
        throw new Error("Error to Fetch data");
      } // End If else statement
      const jsonData = await response.json();
      setFaqData(jsonData);
      console.log(jsonData);
    }; // end Fetch data
    fetchData();
  }, []); // end useEffect

  return (
    <>
      <section className="py-14 px-2 md:px-0">
        <div>
          <div>
            <h1 className="text-center text-xl font-semibold">FAQ</h1>
            <h1 className="text-center text-2xl font-extrabold md:text-4xl">
              Frequently asked questions
            </h1>
          </div>
          <div className="md:w-2/4 mx-auto mt-8">
            {faqData.map((items, index) => (
              <div className="my-5" key={index} onClick={() => handleClick(index)}>
                <motion.div
                  // initial={false}
                  animate={{
                    backgroundColor:
                      selected === index ? '#f1f1f1' : "transparent",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-semibold bg-[#27ae60] py-3 rounded-md cursor-pointer p-3 md:text-xl text-white"> {items.question} </h2>
                </motion.div>
                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className=" px-1 text-xl py-2">{items.answere}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
