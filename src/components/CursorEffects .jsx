import React, { useEffect, useRef } from "react";

const CursorEffects = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let followerX = 0,
      followerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(${
          followerRef.current.dataset.hovered === "true" ? 2 : 1
        })`;
      }

      requestAnimationFrame(animate);
    };

    // Handle hover on links
    const handleLinkHover = () => {
      if (followerRef.current) {
        followerRef.current.dataset.hovered = "true";
      }
    };

    const handleLinkUnhover = () => {
      if (followerRef.current) {
        followerRef.current.dataset.hovered = "false";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects on all <a> tags
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkUnhover);
    });

    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkUnhover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none w-[8px] h-[8px] bg-blue-500 rounded-full mix-blend-difference z-[9999]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={followerRef}
        data-hovered="false"
        className="fixed top-0 left-0 pointer-events-none w-[30px] h-[30px] border-2 border-blue-500 rounded-full bg-transparent z-[9999] transition-transform duration-200"
        style={{ willChange: "transform" }}
      />
      <canvas
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(600px at center, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      />
    </>
  );
};

export default CursorEffects;
