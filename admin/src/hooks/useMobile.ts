import React, {useState, useEffect} from "react";

export const useMobile = ()=>{
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
     // on initial load check if screen is smaller than 750 if so set mobile to true
     setIsMobile(
        document.readyState === "complete" && window.innerWidth <= 750
          ? true
          : false
      );
  }, [])
  useEffect(() => {
    const getMobileSize = () => {
      setIsMobile(false);
      if (window.innerWidth <= 750) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", getMobileSize);
    return () => window.removeEventListener("resize", getMobileSize);
  }, []);
  return isMobile;
}