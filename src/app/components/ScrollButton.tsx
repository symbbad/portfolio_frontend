"use client";

import { useState, useEffect } from "react";

interface ScrollButtonProps {
  direction: "down" | "up"; // 버튼 방향
  targetId: string; // 이동할 섹션 ID
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, targetId }) => {
  const [isVisible, setIsVisible] = useState(direction === "down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (direction === "down") {
        setIsVisible(scrollY < 50); // 맨 위에서만 보임
      } else if (direction === "up") {
        setIsVisible(scrollY >= 100); // 본문 안에서만 보임
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [direction]);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const top = direction === "down" ? target.offsetTop : 0;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: direction === "down" ? "4rem" : undefined,
        top: direction === "up" ? "4rem" : undefined,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none", // 클릭 방지
        transition: "opacity 0.5s ease",
        zIndex: 3,
      }}
    >
      {direction === "down" ? (
        <span style={{ fontSize: "24px", color: "#333" }}>↓</span>
      ) : (
        <span style={{ fontSize: "24px", color: "#333" }}>↑</span>
      )}
    </button>
  );
};

export default ScrollButton;