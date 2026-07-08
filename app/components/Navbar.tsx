"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMG, navItems, WA_PRIMARY } from "@/lib/site";
import { WaIcon } from "./WaIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        aria-label="Navegação principal"
      >
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Rodrigues e Castro Advocacia — início">
            <Image
              className="brand-logo"
              src={IMG.logo}
              alt="Rodrigues e Castro Advocacia"
              width={150}
              height={36}
            />
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href={WA_PRIMARY} target="_blank" rel="noreferrer">
              <WaIcon size={13} /> Agendar Consulta
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
          <button
            className={`menu-btn${menuOpen ? " open" : ""}`}
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mob-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav id="mob-menu" className="mob-menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA_PRIMARY} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Agendar Consulta
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      )}
    </>
  );
}
