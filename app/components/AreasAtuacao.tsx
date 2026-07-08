import Image from "next/image";
import { areas } from "@/lib/site";

export function AreasAtuacao() {
  return (
    <section id="atuacao" className="section bg-mid" aria-label="Áreas de Atuação">
      <div className="wrap">
        <div data-anim="up">
          <span className="sec-label">Áreas de atuação</span>
          <h2 className="sec-h2">
            Três áreas, uma só<br />missão: seus direitos.
          </h2>
          <p className="sec-lead">
            Atuamos nas principais demandas jurídicas do cidadão com
            profundidade técnica e atendimento personalizado.
          </p>
        </div>
        <div className="areas-grid">
          {areas.map((area, i) => (
            <article
              className="area-card"
              key={area.titulo}
              data-anim="up"
              data-delay={String(i + 1)}
            >
              <div className="area-icon">
                <Image src={area.icon} alt={area.titulo} width={32} height={32} />
              </div>
              <h3 className="area-titulo">{area.titulo}</h3>
              {area.itens.length > 0 && (
                <ul className="area-lista">
                  {area.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
