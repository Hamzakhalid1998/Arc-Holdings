// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = ({ BgImage, pageName, pageTitle, video }) => {
  return (
    <div className="h-[400px] w-full bg-cover bg-center relative">
      {/* Background */}
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover -z-10"
        />
      ) : (
        <div
          className="absolute w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="bg-black/70 h-full w-full flex flex-col justify-center items-center relative text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:text-7xl md:text-6xl text-4xl font-bold text-center border-b-2 border-orange-500 pb-4"
        >
          {pageTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-2 mt-4 text-lg"
        >
          <span className="text-orange-500">Home</span>
          <span> &#62;</span>
          <span>{pageName}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
