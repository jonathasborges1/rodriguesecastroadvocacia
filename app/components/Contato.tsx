import { Clock, ExternalLink, Mail, MapPin } from "lucide-react";
import { EMAIL, equipe, WA_PRIMARY } from "@/lib/site";
import { WaIcon } from "./WaIcon";

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Luis%20Lopes%2C%2032%2C%20Parque%2010%20de%20Novembro%2C%20Manaus%2C%20AM%2C%2069055-755";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Rua+Luis+Lopes,+32,+Parque+10+de+Novembro,+Manaus,+AM,+69055-755&z=16&output=embed";

export function Contato() {
  return (
    <section id="contato" className="section bg-dark" aria-label="Contato">
      <div className="wrap">
        <div data-anim="up">
          <span className="sec-label">Contato</span>
          <h2 className="sec-h2">Entre em contato</h2>
          <p className="sec-lead">
            Atendimento online ou presencial, de segunda a sexta, das 08h às 17h.
            Em Manaus, o atendimento presencial ocorre somente após confirmação pelo WhatsApp.
          </p>
        </div>
        <div className="contato-grid">
          {/* WhatsApp */}
          <div className="contato-card" data-anim="left">
            <h3 className="contato-card-title">WhatsApp</h3>
            <p className="contato-card-sub">Atendimento direto com as advogadas</p>
            {equipe.map((m) => (
              <div className="contato-item" key={m.nome}>
                <div className="contato-item-icon">
                  <WaIcon size={18} color="#132B45" />
                </div>
                <div>
                  <p className="contato-item-label">{m.nome}</p>
                  <p className="contato-item-value">
                    <a href={m.wa} target="_blank" rel="noreferrer">{m.telefone}</a>
                  </p>
                </div>
              </div>
            ))}
            <a className="btn-gold" href={WA_PRIMARY} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>
              <WaIcon size={16} color="#FFFFFF" /> Iniciar conversa
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>

          {/* E-mail e Localização */}
          <div className="contato-card" data-anim="right">
            <h3 className="contato-card-title">Outras formas</h3>
            <p className="contato-card-sub">E-mail e localização</p>
            <div className="contato-item">
              <div className="contato-item-icon">
                <Mail size={16} color="#132B45" />
              </div>
              <div>
                <p className="contato-item-label">E-mail</p>
                <p className="contato-item-value">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
            </div>
            <div className="contato-item">
              <div className="contato-item-icon">
                <MapPin size={16} color="#132B45" />
              </div>
              <div>
                <p className="contato-item-label">Localização</p>
                <p className="contato-item-value">Parque 10 de Novembro, Manaus/AM</p>
              </div>
            </div>
            <div className="contato-item">
              <div className="contato-item-icon">
                <Clock size={16} color="#132B45" />
              </div>
              <div>
                <p className="contato-item-label">Horário</p>
                <p className="contato-item-value">Seg–Sex: 08h–17h · Sáb e Dom: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="location-card" data-anim="up">
          <div className="location-copy">
            <div className="location-icon" aria-hidden="true">
              <MapPin size={22} />
            </div>
            <span className="sec-label">Atendimento online e presencial</span>
            <h3>
              Nosso endereço<br /><em>em Manaus.</em>
            </h3>
            <p>
              <strong style={{ color: "#132B45", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase" }}>Escritório</strong><br />
              Rua Luis Lopes, 32 — Parque 10 de Novembro, Manaus/AM · CEP 69055-755
            </p>
            <div className="location-note">
              <Clock size={14} aria-hidden="true" />
              <span>
                Seg–Sex: 08h–17h · Sáb e Dom: Fechado.
                Atendimento presencial somente após confirmação pelo WhatsApp.
              </span>
            </div>
            <div className="location-actions">
              <a
                className="location-link"
                href={MAPS_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={14} /> Ver no Google Maps
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
          </div>
          <div className="location-map">
            <iframe
              title="Mapa do escritório Rodrigues e Castro Advocacia em Manaus"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
