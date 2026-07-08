const credenciais = [
  { v: "2", l: "Advogadas" },
  { v: "OAB/AM", l: "Registro profissional" },
  { v: "3", l: "Áreas de Atuação" },
  { v: "Manaus", l: "Sede de atendimento" },
];

export function GoldStrip() {
  return (
    <section className="gold-strip" aria-label="Credenciais">
      <div className="gold-strip-inner">
        {credenciais.map((item) => (
          <div className="gold-strip-item" key={item.l}>
            <strong>{item.v}</strong>
            <span>{item.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
