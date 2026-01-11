// src/pages/Home.jsx
import { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdElectricBolt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import HomePageSlider from "../components/HomePageSlider";
import Button from "../components/Button";

// Hero slider data
import { heroSlides } from "../data/heroData";
// Clients and Projects data
import { clients } from "../data/clientData";
import { projects } from "../data/projectData";

// About images
import AboutOne from "../assets/01-Home-Slider.png";
import AboutTwo from "../assets/02-Home-Slider.png";
import AboutThree from "../assets/03-Home-Slider.jpg";

// Lazy-loaded components for performance
const AboutSection = lazy(() => import("../components/AboutSection"));
const CardGrid = lazy(() => import("../components/CardGrid"));

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // About section slides
  const slides = [
    { img: AboutOne, title: "MEP CONTRACTING DEPT" },
    { img: AboutTwo, title: "MEP TECHNICAL DEPT" },
    { img: AboutThree, title: "MEP MAINTENANCE DEPT" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[700px] overflow-hidden">
        <HomePageSlider video={heroSlides[currentIndex].video} />
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center text-white px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center text-center"
            >
              <motion.h1
                variants={heroItem}
                className="lg:text-7xl md:text-6xl text-5xl font-bold"
              >
                {heroSlides[currentIndex].heading}
              </motion.h1>

              <motion.div
                variants={heroItem}
                className="flex items-center gap-4 pt-4"
              >
                <span className="h-[2px] w-24 bg-orange-500" />
                <MdElectricBolt className="text-3xl text-gray-300" />
                <span className="h-[2px] w-24 bg-orange-500" />
              </motion.div>

              <motion.p
                variants={heroItem}
                className="text-2xl mt-6 mb-10 max-w-2xl"
              >
                {heroSlides[currentIndex].subHeading}
              </motion.p>

              <motion.button
                variants={heroItem}
                onClick={() => navigate("/about")}
                className="text-xl border px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
              >
                View More
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5 my-16">
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <AboutSection
            slides={slides}
            title="About ARC Holdings"
            text="We have successfully executed electromechanical solutions for diverse projects across the Gulf region, including hospitals, hotels, residential buildings, villas, and commercial complexes."
            buttonText="Learn More"
          />
        </Suspense>
      </section>

      {/* CLIENTS SECTION */}
      <section className="bg-[#ECECEC] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
          <h2 className="text-3xl font-bold border-b-2 border-orange-500 inline-block pb-3 mb-8">
            Our Clients
          </h2>

          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <CardGrid
              slides={clients.slice(0, 6)}
              showHoverText
              contentDirection="justify-center"
              mainDivHeight="h-60"
              mainDivWidth="w-60"
            />
          </Suspense>

          <div className="flex justify-center mt-8">
            <Button
              ButtonText="View More"
              styling="text-xl border px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300"
              buttonOnClick={() => navigate("/clients")}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
          <h2 className="text-3xl font-bold border-b-2 border-orange-500 inline-block pb-3 mb-8">
            Recent Projects
          </h2>

          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <CardGrid
              slides={projects}
              showHoverText
              contentDirection="justify-center"
              mainDivHeight="h-80"
              mainDivWidth="w-80"
            />
          </Suspense>

          <div className="flex justify-center mt-8">
            <Button
              ButtonText="View More"
              styling="text-xl border px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300"
              buttonOnClick={() => navigate("/projects")}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
