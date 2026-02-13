"use client";

import { useEffect, useRef, useState } from "react";

const fadeScaleBase =
  "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-safe:will-change-transform";

const hidden = "opacity-0 scale-95";
const visible = "motion-safe:opacity-100 scale-100";

export const fadeScaleInAnimation = {
  base: fadeScaleBase,
  hidden,
  visible,
};

export function useFadeScaleIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
