"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { IMG, WA_PRIMARY } from "@/lib/site";
import { WaIcon } from "./WaIcon";

const trustItems = [
  { v: "Cível", l: "Área de atuação" },
  { v: "Trabalhista", l: "Área de atuação" },
  { v: "Consumidor", l: "Área de atuação" },
  { v: "OAB/AM", l: "Registro na Ordem" },
];

export function Hero() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className={`hero${heroReady ? " hero-ready" : ""}`}
      aria-label="Rodrigues e Castro Advocacia"
    >
      <Image
        className="hero-bg"
        src={IMG.heroBg}
        alt=""
        role="presentation"
        fill
        sizes="100vw"
        quality={75}
        priority
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-inner">
          <span className="hero-kicker">
            OAB/AM-11421 · OAB/AM-10547
          </span>
          <h1>
            Seus direitos
            <br />
            defendidos com
            <br />
            <em>ética e resultado.</em>
          </h1>
          <p className="hero-sub">
            Escritório com atuação em Direito Civil, Trabalhista e do
            Consumidor. Atendimento online e presencial, com transparência,
            celeridade e comprometimento com a melhor solução para o seu caso.
          </p>
          <div className="hero-actions">
            <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer">
              <WaIcon size={16} color="#132B45" /> Agendar consulta
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="btn-outline" href="#atuacao">
              Ver áreas de atuação <ChevronRight size={15} />
            </a>
          </div>
          <div className="hero-trust">
            {trustItems.map((t) => (
              <div className="trust-item" key={t.v}>
                <strong>{t.v}</strong>
                <span>{t.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
