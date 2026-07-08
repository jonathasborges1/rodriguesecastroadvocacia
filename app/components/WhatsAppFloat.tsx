import { WA_PRIMARY } from "@/lib/site";
import { WaIcon } from "./WaIcon";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WA_PRIMARY}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp da Rodrigues e Castro Advocacia (abre em nova aba)"
    >
      <WaIcon size={24} color="#fff" />
    </a>
  );
}
