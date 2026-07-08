/* ─── SITE ─────────────────────────────────────────────────── */
export const SITE_URL = "https://rodriguesecastroadvocacia.com.br";

/* ─── CONTATOS ─────────────────────────────────────────────── */
const WA_MENSAGEM = encodeURIComponent(
  "Olá! Gostaria de agendar uma consulta com a Rodrigues e Castro Advocacia.",
);

export const WA_ANNE = `https://wa.me/5592981716233?text=${WA_MENSAGEM}`;
export const WA_JULIANA = `https://wa.me/5592982301415?text=${WA_MENSAGEM}`;
export const WA_PRIMARY = WA_JULIANA;
export const EMAIL = "rodriguesecastroadvocacia@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/adv.rodriguesecastro";
export const INSTAGRAM_HANDLE = "@adv.rodriguesecastro";

/* ─── IMAGENS ──────────────────────────────────────────────── */
export const IMG = {
  logo: "/images/logo-v3-light.svg",
  heroBg: "/images/hero-v2.png",
  aboutOffice: "/images/quem-somos-v2.png",
  anne: "/images/anne-castro-hd.png",
  juliana: "/images/juliana-rodrigues-hd.png",
  iconCivil: "/images/icon-civil.png",
  iconTrabalho: "/images/icon-trabalho.png",
  iconConsumidor: "/images/icon-consumidor.png",
};

/* ─── NAVEGAÇÃO ────────────────────────────────────────────── */
export const navItems = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

/* ─── ÁREAS DE ATUAÇÃO ─────────────────────────────────────── */
export const areas = [
  {
    titulo: "Direito Civil",
    icon: IMG.iconCivil,
    itens: [
      "Indenização por dano moral e material",
      "Ações de cobrança",
      "Locação de imóveis",
      "Negativa de procedimentos por planos de saúde",
    ],
  },
  {
    titulo: "Direito do Trabalho",
    icon: IMG.iconTrabalho,
    itens: [
      "Verbas trabalhistas",
      "Reconhecimento de vínculo empregatício",
      "Verbas rescisórias indevidas",
      "Rescisão indireta",
      "Desvio e acúmulo de funções",
      "Acidente de trabalho",
      "Assédio moral e dispensa irregular",
    ],
  },
  {
    titulo: "Direito do Consumidor",
    icon: IMG.iconConsumidor,
    itens: [
      "Anulação de multa por irregularidades em energia e água",
      "Desvio de produto em entregas por aplicativo",
      "Venda casada",
      "Overbooking",
      "Atraso de voo",
    ],
  },
];

/* ─── EQUIPE ───────────────────────────────────────────────── */
export const equipe = [
  {
    nome: "Anne Castro",
    oab: "OAB/AM-11421",
    areas: "Cível · Trabalhista · Consumidor",
    missao:
      "Buscar a melhor solução jurídica para cada caso concreto, de maneira transparente, célere e eficaz.",
    foto: IMG.anne,
    wa: WA_ANNE,
    telefone: "+55 92 98171-6233",
    inicial: "A",
  },
  {
    nome: "Juliana Rodrigues",
    oab: "OAB/AM-10547",
    areas: "Trabalhista · Cível · Consumidor",
    missao:
      "Oferecer um serviço jurídico de excelência, pautado pela ética, eficiência e transparência.",
    foto: IMG.juliana,
    wa: WA_JULIANA,
    telefone: "+55 92 98230-1415",
    inicial: "J",
  },
];

/* ─── FAQ ──────────────────────────────────────────────────── */
export const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é realizada para que possamos entender o seu caso e apresentar as alternativas jurídicas disponíveis. Entre em contato pelo WhatsApp para agendar e receber todas as orientações necessárias.",
  },
  {
    q: "Vocês atendem em quais cidades?",
    a: "O escritório realiza atendimentos online e presenciais. O atendimento presencial ocorre em Manaus, na Rua Luis Lopes, 32 — Parque 10 de Novembro, somente após confirmação pelo WhatsApp. O horário de funcionamento é de segunda a sexta, das 08h às 17h.",
  },
  {
    q: "Quais documentos preciso levar para a consulta?",
    a: "Os documentos variam conforme o tipo de caso. No agendamento, nossa equipe orienta quais documentos apresentar para que a consulta seja a mais produtiva possível.",
  },
  {
    q: "Vocês cobram pela consulta inicial?",
    a: "Entre em contato pelo WhatsApp para obter informações sobre valores e condições de atendimento. Trabalhamos com transparência em todas as etapas.",
  },
  {
    q: "Quanto tempo dura um processo?",
    a: "O prazo varia de acordo com a natureza e a complexidade de cada caso. Nossa equipe fornece uma estimativa realista após a análise das particularidades da sua situação.",
  },
];
