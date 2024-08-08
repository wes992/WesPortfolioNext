"use client";

import { RefObject, useEffect } from "react";

const DEFAULT_SCALE = 0.7;
const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
  offset: 0,
};

export const useScrollEffect = (
  containerRef: RefObject<HTMLElement>,
  scale = DEFAULT_SCALE,
  options: Partial<typeof DEFAULT_OPTIONS> = DEFAULT_OPTIONS
) => {
  const combinedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    root: containerRef.current,
  };
  const callback = (entries: any[]) => {
    const [entry] = entries;
    const scrollCallback = () => {
      const windowOffset = window.scrollY;
      const scrollHeight = combinedOptions.root?.scrollHeight || 0;
      const itemOffset = entry.target.offsetTop;
      const offset = windowOffset - itemOffset - scrollHeight;
      const scaledOffset = `${offset * scale}px`;

      entry!.target.style.backgroundPositionY = scaledOffset;
    };
    if (entry.isIntersecting) {
      window.addEventListener("scroll", scrollCallback);
    } else {
      window.removeEventListener("scroll", scrollCallback);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, combinedOptions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);
};
