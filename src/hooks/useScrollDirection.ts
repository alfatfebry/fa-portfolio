import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(threshold  = 10){
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [isAtop, setIsTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsTop(currentY < 10);
      
      if (Math.abs(currentY - lastY) < threshold) return;

      setDirection(currentY > lastY ? "down" : "up");
      lastY =currentY;
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => window.removeEventListener("scroll", handleScroll);
  },[threshold]);

  return{direction, isAtop};

} 