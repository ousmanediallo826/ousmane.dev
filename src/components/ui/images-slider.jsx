import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you're using this utility

export const ImagesSlider = ({
  images,
  onIndexChange, // Callback function to send currentIndex to the parent
  className,
  autoplay = true,
  direction = "up", // Direction for animation
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    const newIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    if (onIndexChange) onIndexChange(newIndex); // Update the parent with the new currentIndex
  };

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.imgURL;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loaded) => setLoadedImages(loaded))
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    loadImages();

    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Adjust autoplay timing
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay, images, currentIndex]);

  const slideVariants = {
    initial: { scale: 0.9, opacity: 0, y: direction === "up" ? "100%" : "-100%" },
    visible: { scale: 1, opacity: 1, y: "0%", transition: { duration: 0.8 } },
    exit: { scale: 0.9, opacity: 0, y: direction === "up" ? "-100%" : "100%", transition: { duration: 0.8 } },
  };

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence>
        {loadedImages.length > 0 && (
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex].imgURL}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
