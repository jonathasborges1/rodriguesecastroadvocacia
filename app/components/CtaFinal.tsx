import { ChevronRight } from "lucide-react";
import { EMAIL, WA_PRIMARY } from "@/lib/site";
import { WaIcon } from "./WaIcon";

export function CtaFinal() {
  return (
    <section className="cta-final" aria-label="Agende sua consulta">
      <div className="wrap">
        <div className="cta-content">
          <div className="cta-gold-line" aria-hidden="true" />
          <h2 className="sec-h2">Pronto para resolver<br />sua questão jurídica?</h2>
          <p className="sec-lead">
            Fale agora com as advogadas da Rodrigues e Castro e receba
            orientação jurídica para o seu caso.
          </p>
          <div className="cta-actions">
            <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer">
              <WaIcon size={16} color="#132B45" /> Agendar consulta pelo WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="btn-outline" href={`mailto:${EMAIL}`}>
              Enviar e-mail <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
