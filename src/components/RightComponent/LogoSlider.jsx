import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import exp1 from "/src/assets/exp1.jpeg";
import exp2 from "/src/assets/exp2.jpeg";
import exp3 from "/src/assets/exp3.jpeg";
import exp4 from "/src/assets/exp4.jpeg";
import exp5 from "/src/assets/exp5.png";
import exp6 from "/src/assets/exp6.png";

// Now each logo has a corresponding link
const logos = [
  { img: exp1, url: "https://outfoxsocial.com/" },
  { img: exp2, url: "https://www.kwikcart.io/" },
  { img: exp3, url: "https://www.akratijewelsinc.com/" },
  { img: exp4, url: "https://frinzy.in/ " },
  { img: exp5, url: "https://example.com/5" }, // zaure plus website remaining
  { img: exp6, url: "https://gigsman-v2-netneudevelopers.netlify.app/" },
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <h2 className="mt-24 text-lg font-medium tracking-tight text-[rgb(152,243,151)] sm:text-xl text-center mb-4">
        Industries I’ve Worked With
      </h2>
      <p className="text-sm text-white text-center mb-10">
        🎯 Fashion & Lifestyle | 💇‍♀️ Beauty & Wellness | 🚀 Startups | 🎒 Travel & Comfort
      </p>

      <div className="relative w-full max-w-md mx-auto">
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <a
            href={logos[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={logos[currentIndex].img}
              alt={`Logo ${currentIndex}`}
              className="h-40 w-auto object-contain transition duration-500 ease-in-out"
            />
          </a>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {logos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === currentIndex ? "bg-green-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
