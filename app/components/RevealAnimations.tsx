"use client";

import { useEffect } from "react";

/** Ativa a animação de entrada dos elementos marcados com [data-anim]. */
export function RevealAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("anim-in");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.07 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
