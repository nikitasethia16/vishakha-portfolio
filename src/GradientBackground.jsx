import React, { useEffect, useRef } from "react";
import "./GradientBackground.css";

const GradientBackground = () => {
  const containerRef = useRef(null);
  const radialRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const container = containerRef.current;
      const radial = radialRef.current;
      const gradientSize = radial.offsetWidth;

      let newX = mouseX - gradientSize / 2;
      let newY = mouseY - gradientSize / 2;

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      if (newX < 0) newX = 0;
      else if (newX + gradientSize > containerWidth)
        newX = containerWidth - gradientSize;

      if (newY < 0) newY = 0;
      else if (newY + gradientSize > containerHeight)
        newY = containerHeight - gradientSize;

      radial.style.left = `${newX}px`;
      radial.style.top = `${newY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="radial-gradient" ref={radialRef}></div>
    </div>
  );
};

export default GradientBackground;
