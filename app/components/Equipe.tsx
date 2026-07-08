import Image from "next/image";
import { equipe } from "@/lib/site";
import { WaIcon } from "./WaIcon";

export function Equipe() {
  return (
    <section id="equipe" className="section bg-dark" aria-label="Nossa Equipe">
      <div className="wrap">
        <div data-anim="up">
          <span className="sec-label">Equipe</span>
          <h2 className="sec-h2">
            Conheça as advogadas<br />que vão cuidar do seu caso.
          </h2>
          <p className="sec-lead">
            Profissionais inscritas na OAB/AM, com atuação nas áreas Civil,
            Trabalhista e do Consumidor.
          </p>
        </div>
        <div className="equipe-grid">
          {equipe.map((m, i) => (
            <article
              className="membro-card"
              key={m.nome}
              data-anim={i === 0 ? "left" : "right"}
            >
              <div className="membro-foto-col">
                <Image
                  className="membro-foto"
                  src={m.foto}
                  alt={`Advogada ${m.nome} (${m.oab})`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  quality={90}
                />
                <span
                  className={`membro-inicial${m.inicial === "J" ? " is-j" : ""}`}
                  aria-hidden="true"
                >
                  {m.inicial}
                </span>
              </div>
              <div className="membro-info">
                <h3 className="membro-nome">{m.nome}</h3>
                <span className="membro-oab">{m.oab}</span>
                <span className="membro-areas">{m.areas}</span>
                <div className="membro-missao">
                  <span className="membro-missao-label">Missão</span>
                  <p>&ldquo;{m.missao}&rdquo;</p>
                </div>
                <a className="membro-wa" href={m.wa} target="_blank" rel="noreferrer">
                  <WaIcon size={14} color="#4ADE80" /> Falar com {m.nome.split(" ")[0]}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
