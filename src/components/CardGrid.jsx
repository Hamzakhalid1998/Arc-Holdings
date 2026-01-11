// src/components/CardGrid.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const CardGrid = ({
  slides = [],
  showHoverText = false,
  mainDivHeight = "h-60",
  mainDivWidth = "w-60",
  contentDirection = "justify-center",
  extraGap = "gap-6",
  centerContent = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="my-10" ref={ref}>
      <motion.div
        className={`flex flex-wrap ${
          centerContent ? "justify-center" : contentDirection
        } ${extraGap} px-4 py-10`}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {slides.map((item, index) => (
          <motion.div
            key={index}
            className={`relative border rounded-xl shadow-md ${mainDivHeight} ${mainDivWidth} flex justify-center items-center bg-white overflow-hidden group cursor-pointer`}
            variants={cardVariants}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.06 }}
          >
            <img
              src={item.img}
              alt={item.title || `Item ${index}`}
              className="object-cover h-full w-full transition-all duration-300 group-hover:scale-110"
            />

            {showHoverText && item.title && (
              <>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                <h3 className="absolute text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 text-center px-2">
                  {item.title}
                </h3>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardGrid;
