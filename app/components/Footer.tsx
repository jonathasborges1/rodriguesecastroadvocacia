import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Instagram, Mail } from "lucide-react";
import { areas, EMAIL, equipe, IMG, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/site";
import { WaIcon } from "./WaIcon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-body">
          <div className="footer-brand">
            <Image src={IMG.logo} alt="Rodrigues e Castro Advocacia" width={230} height={55} />
            <p>
              Advocacia com atuação em Direito Civil, Trabalhista e do Consumidor no
              Amazonas. Transparência, ética e resultado.
            </p>
          </div>
          <div className="footer-col">
            <h4>Áreas</h4>
            {areas.map((a) => (
              <a href="#atuacao" key={a.titulo}>
                <ChevronRight size={12} /> {a.titulo}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            {equipe.map((m) => (
              <a href={m.wa} target="_blank" rel="noreferrer" key={m.nome}>
                <WaIcon size={12} /> {m.telefone}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`}>
              <Mail size={12} /> {EMAIL}
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram size={12} /> {INSTAGRAM_HANDLE}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <Link href="/politica-de-privacidade">
              <ChevronRight size={12} /> Política de Privacidade
            </Link>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-bottom">
          <span>© 2026 Rodrigues e Castro Advocacia · OAB/AM</span>
          <span>
            Site criado por{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noopener">
              Luma Sites
            </a>{" "}
            e{" "}
            <a href="https://github.com/jonathasborges1/" target="_blank" rel="noopener">
              Jonathas Borges
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
