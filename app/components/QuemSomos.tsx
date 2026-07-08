import Image from "next/image";
import { IMG } from "@/lib/site";

const tags = [
  { label: "Direito Civil", href: "#atuacao" },
  { label: "Direito Trabalhista", href: "#atuacao" },
  { label: "Direito do Consumidor", href: "#atuacao" },
  { label: "OAB/AM", href: "#equipe" },
  { label: "Ética", href: "#quem-somos" },
  { label: "Transparência", href: "#quem-somos" },
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="section bg-dark" aria-label="Quem Somos">
      <div className="wrap">
        <div data-anim="up">
          <span className="sec-label">Quem Somos</span>
          <h2 className="sec-h2">
            Advocacia com propósito,<br />
            transparência e dedicação.
          </h2>
        </div>
        <div className="sobre-grid">
          <div className="sobre-img-col" data-anim="left">
            <Image
              src={IMG.aboutOffice}
              alt="Escritório de advocacia com mesa de atendimento e duas cadeiras"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              quality={75}
            />
            <div className="sobre-img-overlay" aria-hidden="true">
              <div className="sobre-monogram">RC</div>
              <div className="sobre-badge">
                <strong>Rodrigues e Castro</strong>
                <span>Advocacia · OAB/AM</span>
              </div>
            </div>
          </div>
          <div className="sobre-text" data-anim="right">
            <p>
              O escritório <strong style={{ color: "#fff" }}>Rodrigues e Castro Advocacia</strong>{" "}
              atua na prestação de serviços jurídicos voltados às
              necessidades dos nossos clientes. Com uma equipe experiente e comprometida,
              atuamos nas áreas do Direito Civil, Trabalhista e do Consumidor, sempre em
              busca da melhor solução para cada caso.
            </p>
            <p>
              Nossa prática é guiada por valores que não negociamos: ética, eficiência e
              transparência em cada etapa do processo. Estamos aqui para assegurar a defesa
              dos seus direitos com a seriedade e o cuidado que você merece.
            </p>
            <p>
              Acreditamos que cada cliente carrega uma história única. Por isso, dedicamos
              atenção individualizada a cada caso, oferecendo orientação clara e comunicação
              aberta durante toda a jornada jurídica.
            </p>
            <div className="sobre-tags">
              {tags.map((t) => (
                <a className="sobre-tag" key={t.label} href={t.href}>{t.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
