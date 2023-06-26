import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import { useNavigate, Routes, Route } from "react-router-dom";
import Projects from "./Projects";

const Work = () => {
  const navigate = useNavigate();
  const navigateToWorks = () => {
    navigate("./Projects");
  };
  return (
    <section className="section mt-7" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="flex flex-col lg:flex-col gap-x-10">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>{" "}
              <br />
              <p className="max-w-sm mb-16">
                See Some Of My Works In GitHub
              </p>{" "}
              <br />
              <a href="https://github.com/AhmedMAlamen">
              <button className="btn btn-lg">
                 GitHub 
              </button>
              </a>
            </div>
            <div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt="Project"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  {" "}
                  <a href="https://www.google.com">
                    <span className="text-gradient">Landing Page</span>
                  </a>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3x1 text-white ">portfolio</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt="Project"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                {" "}
                <span className="text-gradient">Landing Page</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white ">portfolio</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt="Project"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                {" "}
                <span className="text-gradient">Landing Page</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white ">portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
