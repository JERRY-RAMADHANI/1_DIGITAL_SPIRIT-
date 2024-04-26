import { useState, useEffect } from "react";
import Navbar from "@/components/organism/Navbar";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";

const collection = [bg1, bg2];

export default function Distribution() {
  const [images, setImages] = useState(collection);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <main>
        <div className="w-[100vw] h-[100vh] relative overflow-hidden">
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            src={images[currentImageIndex]}
            alt="pupuk"
          />
        </div>
      </main>
    </>
  );
}
