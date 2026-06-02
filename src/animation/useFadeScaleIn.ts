"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const fadeScaleBase =
  "motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out motion-safe:will-change-[opacity,transform]";

const hidden = "opacity-0 scale-95";
const visible = "motion-safe:opacity-100 scale-100";

export const fadeScaleInAnimation = {
  base: fadeScaleBase,
  hidden,
  visible,
};

const callbacks = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px 96px 0px",
      threshold: 0.1,
    },
  );

  return observer;
};

export function useFadeScaleIn<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<T | null>(null);
  const visibleRef = useRef(false);

  const reveal = useCallback(() => {
    if (visibleRef.current) return;

    visibleRef.current = true;
    setIsVisible(true);
  }, []);

  const ref = useCallback(
    (node: T | null) => {
      if (nodeRef.current) {
        callbacks.delete(nodeRef.current);
        observer?.unobserve(nodeRef.current);
      }

      nodeRef.current = node;

      if (!node || visibleRef.current) return;

      if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        reveal();
        return;
      }

      callbacks.set(node, reveal);
      getObserver().observe(node);
    },
    [reveal],
  );

  useEffect(() => {
    return () => {
      if (!nodeRef.current) return;

      callbacks.delete(nodeRef.current);
      observer?.unobserve(nodeRef.current);
    };
  }, []);

  return { ref, isVisible };
}
