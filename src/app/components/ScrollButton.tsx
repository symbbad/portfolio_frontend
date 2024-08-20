"use client";

import React from "react";

const ScrollButton = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return <button onClick={scrollToContent}>Scroll Down</button>;
};

export default ScrollButton;