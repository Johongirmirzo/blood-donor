import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SlideToTopBtn } from "./index.styled";

const SlideToTopCircle = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(window.scrollY >= 500 ? true : false);
    const getScrollPosition = () => {
      if (window.scrollY >= 500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", getScrollPosition);
    return () => window.addEventListener("scroll", getScrollPosition);
  }, []);

  const handleSlideToTopClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <SlideToTopBtn onClick={handleSlideToTopClick} isActive={isActive}>
      <FaArrowUp />
    </SlideToTopBtn>
  );
};

export default SlideToTopCircle;
