"use client";

import { motion } from "framer-motion"; // Import motion for animations
import { useState } from "react"; // Import useState to manage state
import { ImagesSlider } from "../components/ui/images-slider";
import { images } from "../constants/hero";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state for current index

  const handleIndexChange = (index) => {
    setCurrentIndex(index); // Update the currentIndex when it changes in the slider
  };

  return (
    <section className="relative w-full h-screen">
      {/* Image Slider with text overlay */}
      <ImagesSlider
        className="h-[40rem]"
        images={images}
        onIndexChange={handleIndexChange} // Pass the handler to get the currentIndex
      />

      {/* Display text from the currentIndex */}
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 absolute inset-0 flex flex-col justify-center items-center"
      >
        {/* Title text */}
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {images[currentIndex]?.name} {/* Display the name of the current image */}
        </motion.p>

        {/* Description text */}
        <motion.p className="text-center text-lg text-neutral-200 px-6">
          {images[currentIndex]?.description} {/* Display the description of the current image */}
        </motion.p>

        {/* Button */}
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
