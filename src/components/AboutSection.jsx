// src/components/AboutSection.jsx
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ImageSlider from "./ImageSlider";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AboutSection = ({
  slides,
  title = "About ARC Holdings",
  text,
  buttonText = "Read More",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const goAboutPage = () => navigate("/about");

  return (
    <section ref={ref} className="py-24 relative">
      <div className="w-full max-w-7xl px-4 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
        <motion.div initial="show" animate={controls} variants={variants}>
          <ImageSlider slides={slides} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col gap-6"
        >
          <motion.h2
            variants={variants}
            className="text-4xl font-bold text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.p variants={variants} className="text-gray-500 text-base">
            {text}
          </motion.p>
          <motion.div variants={variants} className="flex mt-4">
            <Button
              ButtonText={buttonText}
              buttonOnClick={goAboutPage}
              styling="text-xl border px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
